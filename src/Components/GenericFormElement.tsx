import React from "react"
import { Button } from "react-bootstrap";
import DeleteIcon from "../pics/delete-bin-line.svg";
import { createSimpleElement, createSelectOptionElement } from "../helpers/utils";
import { GenericFormElementType } from "../types";



const GenericFormElement = ({element, index, dispatch, removeElement}: GenericFormElementType) => {

    const renderContent = React.useCallback(() => {
        switch(element) {
          case 'text': 
            return createSimpleElement("text");
          
          case 'number': 
            return createSimpleElement("number");

          case 'email': 
            return createSimpleElement("email");  
    
          case 'text option list': 
            return createSelectOptionElement();

          case 'date picker': 
            return createSimpleElement("date picker");

          case 'file input': 
            return createSimpleElement("file input");

          default: 
            return null;
          
        }
      }, [element]);


  return (
    <div className="my-3 d-flex">
      {renderContent()}
      <Button variant="danger" className="ml-2" onClick={() => dispatch(removeElement(index))}> <img src={DeleteIcon} alt="delete" /> </Button>

    </div>
  )
};

export default GenericFormElement;
