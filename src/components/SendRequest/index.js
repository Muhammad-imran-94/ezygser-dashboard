import {
    Row,
    Col,
    CardBody,
    Card,
    Container,
    Input,
    Label,
    Form,
  } from "reactstrap";

const Index = (props) => {
  let{text , labelText ,width}=props;
  return (
    <>
         
                  <div className="p-2">
                    <Form
                      className="form-inline"
                      onSubmit={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                    >
                    <Row className="justify-content-center d-flex mb-3">
                      <div className=" mx-sm-3 col">
                          <p>{text}</p>
                        <Label className="form-label">{labelText}</Label>
                        <div >
                        <Input
                          id="email"
                          name="email"
                          className={"form-control" + " " + width }
                          placeholder="Enter Email"
                          type="email"
                          autoComplete="off"
                        />
                        </div>
                        </div>
                      </Row>
                      <div className="mx-sm-3 col">
                        <button
                          className="btn btn-purple btn-block "
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </Form>
                  </div>
                

    </>
  )
}

export default Index;