
import Layout from '../../components/layout/layout'

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

 const Index = () => {
  return (
    <>
       <Layout>
        <Container className="position-relative mt-5 mt-md-0 mt-lg-0 mt-xl-0">
          <Row className="justify-content-center">
            <Col md={8} lg={10} xl={12} className="mt-4">
              <Card className="overflow-hidden mt-4">
                <CardBody className="pt-2 input-card">
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
                        <Label className="form-label">Device Model:</Label>
                        <Input
                          id="model"
                          name="model"
                          className="form-control"
                          placeholder="Enter Device Model"
                          type="Number"
                          autoComplete="off"
                        />
                        </div>
                        <div className="mx-sm-3 col">
                        <Label className="form-label">Device Name:</Label>
                        <Input
                          id="device_name"
                          name="device_name"
                          className="form-control"
                          placeholder="Enter Device Name"
                          type="text"
                          autoComplete="off"
                        />
                      </div>
                      </Row>
                      <Row className="justify-content-center d-flex mb-3">
                        <div className="mx-sm-3 col">
                        <Label className="form-label">Description:</Label>
                        <textarea
                          className="form-control text-area"
                          id="description"
                          type="text"
                          rows="5"
                        />
                      </div>
                      </Row>
                      <div className="mx-sm-3 col">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Add Device
                        </button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </Layout>
    </>
  )
}

export default Index;