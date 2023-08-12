import React, {useState} from "react"
import { useParams } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import db from "../data/db.json"
import { createSimpleElement, createSelectOptionElement } from "../helpers/utils";
import EditIcon from "../pics/edit-line.svg";
import DeleteIcon from "../pics/delete-bin-line.svg";
import { formElementType, formType } from "../types";


const FormItem = ({context}:{context?:string}) => {
  const { id } = useParams()
  const dbForms: formType[] = db.forms;
  const form:formType | undefined = dbForms.find(form =>  form.id === Number(id))


  const [changeFormName, setChangeFormName] = useState({
    bool: false,
    value: form?.name ?? "form name"
  })
  const closeNameFormModal = () => {
    setChangeFormName({...changeFormName, bool:false})
    updateFormName(changeFormName.value)
  }

  const [editFormElement, setEditFormElement] = useState({
    bool: false,
    id: 0,
    label: "",
    type: "",
    options: [] as string[]
  })
  const openFormElementModal = (id: number, label: string, type: string, options: string[] = []) => {
    setEditFormElement({
      bool: true,
      id,
      label,
      type,
      options
    })
  }
  const closeFormElementModal = () => {
    setEditFormElement({...editFormElement, bool: false})
    updateFormElement(editFormElement.id, editFormElement.label, editFormElement.type, editFormElement.options)
  }
  
  

  const deleteFormElement = (index:number) => {
    const URL = "http://localhost:3500/forms/" + id

    const newForm = {
      ...form,
      elements: form?.elements.filter((elm) => elm.id !== index)
    }

    fetch(URL, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(newForm)
    })
    .then(response => response.json())
    .then(res => console.log(res))
  }

  const updateFormName = (newName: string) => {
    const URL = "http://localhost:3500/forms/" + id
    const newForm = {
      ...form,
      name: newName
    }

    fetch(URL, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(newForm)
    })
    .then(response => response.json())
    .then(res => console.log(res))

  }

  const updateFormElement = (elmId: number, label:string, type:string, options: string[]) => {
    const URL = "http://localhost:3500/forms/" + id
    
    const newElement = {
      id: elmId,
      label,
      type,
      options
    }

    const newForm = {
      ...form,
      elements: form?.elements.filter(elm => elm.id !== elmId).concat(newElement).sort((a, b) => a.id - b.id)
    }

    fetch(URL, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(newForm)
    })
    .then(response => response.json())
    .then(res => console.log(res))

  }

  return (
    <div className=" text-center px-5">
      {form ? (
        <>
          <h2>{form?.name}</h2>
          {context === "edit" &&
            (
              <Button variant="primary" onClick={() => setChangeFormName({...changeFormName, bool: true})} > <img src={EditIcon} alt="edit" /> </Button>
            )
          }
          <ul>
            {form?.elements.map((elm: formElementType, index: number)=> {
              return (
                <div key={index} className="py-2 row ">
                  <div className="col-10">
                    {elm.type === "text option list" ? createSelectOptionElement(elm.label, elm?.options) : createSimpleElement(elm.type, elm.label)}
                  </div>
                  {context === "edit" &&
                    (
                      <div className="col-2">
                        <Button variant="primary" onClick={() => openFormElementModal(elm.id, elm.label, elm.type, elm.options)} > <img src={EditIcon} alt="edit" /> </Button>
                        <Button variant="danger" className="ml-2" onClick={() => deleteFormElement(elm.id)}> <img src={DeleteIcon} alt="delete" /> </Button>
                      </div>
                    )
                  }

                </div>
              )
            })}
          </ul>

          <Modal show={changeFormName.bool} onHide={closeNameFormModal} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title>Form Name Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Control
                value={changeFormName.value}
                onChange={(e) => setChangeFormName({...changeFormName, value: e.target.value})}
              />
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="primary" >
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>

          <Modal show={editFormElement.bool} onHide={closeFormElementModal} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title>Form Element Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label >Element Label</Form.Label>
              <Form.Control
                value={editFormElement.label}
                onChange={(e) => setEditFormElement({ ...editFormElement, label: e.target.value })}
              />
              <Form.Label className="mt-4" >Element Type</Form.Label>
              <Form.Select value={editFormElement.type} onChange={(e) => setEditFormElement({ ...editFormElement, type: e.target.value })} >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="date picker">Date Picker</option>
                <option value="file input">File Input</option>
                <option value="text option list">Text Option List</option>
              </Form.Select>

              {editFormElement.type === "text option list" &&
                <>
                  <Form.Label className="mt-4" >Element Options</Form.Label>
                  <Form.Control
                    value={editFormElement.options.join(",")}
                    onChange={(e) => setEditFormElement({ ...editFormElement, options:  e.target.value.split(",") })}
                  />
                </>
              }
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="primary" >
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
    
        </>
      ) : (
        <h2>No Such Form</h2>
      )}
    </div>
  );
};

export default FormItem;
