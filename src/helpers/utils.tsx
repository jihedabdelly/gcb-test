import { Form } from "react-bootstrap";

export const createSimpleElement = (elementType: string, label?: string) => {
  let type: string;
  let elementLabel: string

  switch (elementType) {
    case "text":
      type = "text";
      elementLabel = "Text";
      break;

    case "number":
      type = "number";
      elementLabel = "Number";
      break;

    case "email":
      type = "email";
      elementLabel = "Email";
      break;

    case "date picker":
      type = "date";
      elementLabel = "Date Picker";
      break;

    case "file input":
      type = "file";
      elementLabel = "File Input";
      break;

    default:
      return null;
  }

  return (
    <Form className="d-flex space-between">
      <Form.Label>{label ? label : elementLabel}</Form.Label>
      <Form.Control className="mx-2" type={type} />
    </Form>
  );
};

export const createSelectOptionElement = (label?: string, options?: string[]) => {

    return (
        <Form className="d-flex space-between">
            <Form.Label>{label ? label : "Text Option List"}</Form.Label>
            <Form.Select className="mx-2" >
                {(options && options.length > 0) ? 
                    options.map((opt, index) => {
                        return <option key={index}>{opt}</option>
                    }) :
                    <>
                        <option value="1">option1</option>
                        <option value="2">option2</option>
                        <option value="3">option3</option>
                    </>
            }
            </Form.Select>
        </Form>
    )
}
