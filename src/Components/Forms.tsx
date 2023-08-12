import React from "react"
import {Table, Button} from 'react-bootstrap';
import { formType } from "../types";

import db from "../data/db.json"


const Forms = () => {


  const deleteForm = (id?:number) => {
    const URL = "http://localhost:3500/forms/" + id

    fetch(URL, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(res => console.log(res))
  }

  
  return (
    <div className="forms-container">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Form Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {db.forms.map((form:formType , index:number) => {
          return (<tr key={index}>
            <td>{form.id} </td>
            <td>{form.name} </td>
            <td> 
              <Button className="mx-2" variant="success" href={"/forms/"+form.id}>check</Button>
              <Button className="mx-2" variant="primary" href={"/forms/"+form.id+"/edit"}>edit</Button>
              <Button className="mx-2" variant="danger" onClick={() => deleteForm(form.id)}>delete</Button>
            </td>
          </tr>)
        }
        
        )}
        
        
        
      </tbody>
    </Table>
    </div>
  )
};

export default Forms;
