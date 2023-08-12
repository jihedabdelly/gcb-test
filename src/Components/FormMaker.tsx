import React, {useState} from "react"
import { Button, ListGroup, ListGroupItem, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../Redux/store";
import { addElement, removeElement } from "../Redux/reducers/formElementsReducer";
import GenericFormElement from "./GenericFormElement";
import { useNavigate } from "react-router-dom";
import { formElementType, formType } from "../types";





const handleOnDrag = (e: React.DragEvent, elementType: string) => {
  e.dataTransfer.setData("elementType", elementType)
}
const handleDragOver = (e:React.DragEvent) => {
  e.preventDefault()
}

const handleFormSubmit = (e:any) => {
  e.preventDefault()
  const formData = new FormData(e.target),
  formDataObj = Object.fromEntries(formData.entries())
  console.log(formDataObj)
}

const FormMaker = () => {
  const [formName, setFormName] = useState("")
  const formElements = useSelector((state: RootState) => state.formElements.value);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDrop = (e:React.DragEvent) => {
    const elementType = e.dataTransfer.getData("elementType")
    dispatch(addElement(elementType))
    
  }

  const postToJSONServer = () => {
    const URL = "http://localhost:3500/forms"

    const addedFormElms = formElements.map((elm, index) => {
      return {
        id: index,
        type: elm,
        label: elm.split(" ").map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" "),
        ...(elm === "text option list" ? { options: ["option1","option2","option3"]} : {})  
      };
      
    })

    const newForm: formType = {
      "name": formName,
      "elements": addedFormElms
    }

    fetch(URL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(newForm)
    })
    .then(response => response.json())
    .then(() => navigate("/forms"))
  }

  return (
    <div className="form-maker-container px-5">

      <ListGroup className="form-maker-listgroup">
        <ListGroupItem className="form-elements" draggable onDragStart={(e) => handleOnDrag(e, "text")}>Text</ListGroupItem>
        <ListGroupItem className="form-elements" draggable onDragStart={(e) => handleOnDrag(e, "number")}>Number</ListGroupItem>
        <ListGroupItem className="form-elements" draggable onDragStart={(e) => handleOnDrag(e, "email")}>Email</ListGroupItem>
        <ListGroupItem className="form-elements" draggable onDragStart={(e) => handleOnDrag(e, "text option list")}>Text Option List</ListGroupItem>
        <ListGroupItem className="form-elements" draggable onDragStart={(e) => handleOnDrag(e, "date picker")}>Date Picker</ListGroupItem>
        <ListGroupItem className="form-elements" draggable onDragStart={(e) => handleOnDrag(e, "file input")}>File Input</ListGroupItem>
      </ListGroup>
      <div className="drop-panel mx-2 p-5" onDrop={handleDrop} onDragOver={handleDragOver} > Drop Form Elements here + </div>
      <Form onSubmit={handleFormSubmit} >
        <Form.Control
          required
          placeholder="Enter the Form Name"
          aria-label="form name"
          name="form_name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
        <ul >
          {formElements.map((elm, index) => 
          <div className="d-flex">
            <GenericFormElement element={elm} index={index} dispatch={dispatch} removeElement={removeElement} />
          </div>
          )}
        </ul>
        
        <Button className="mb-3" type="submit" onClick={postToJSONServer}>
          Submit
        </Button>
      </Form>
      
    </div>
  )
};

export default FormMaker;
