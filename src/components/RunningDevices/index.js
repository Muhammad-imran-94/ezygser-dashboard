import Toggle from "../toggleButton";

import { Row, Col, Card, Container } from "reactstrap";

 const Index = () => {
  return (
    <>
    {/* <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={12} xl={12} className="mt-5">
            <Card className="overflow-hidden mt-4 px-4 d-flex align-center">
              <div>
                <Row>
                  <ul className="m-0 pt-2 pb-2 ">
                    <li className="d-flex justify-content-between align-items-center px-2">
                      Devices 1
                      <Toggle />
                    </li>
                  </ul>
                  
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container> */}

<Container>
        <Row className="justify-content-center">
          <Col md={12} lg={12} xl={12} className="mt-5">
            <Card className="overflow-hidden mt-4 px-4 d-flex align-center">
              <div>
                <Row>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Device Name</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Gyser 1</td>
                        <td>18</td>
                        <td><Toggle /></td>
                      </tr>
                      <tr>
                        <td>Gyser 2</td>
                        <td>20</td>
                        <td><Toggle /></td>
                      </tr>
                      <tr>
                        <td>Gyser 3</td>
                        <td>0</td>
                        <td><Toggle /></td>
                      </tr>
                      <tr>
                        <td>Gyser 4</td>
                        <td>40</td>
                        <td><Toggle /></td>
                      </tr>
                      <tr>
                        <td>Gyser 5</td>
                        <td>0</td>
                        <td><Toggle /></td>
                      </tr>
                    </tbody>
                  </table>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Index;

