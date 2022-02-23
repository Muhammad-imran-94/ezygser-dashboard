import Card from '../../components/Card'
import { Row, Col, Container } from "reactstrap";
export const Devices = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={12} xl={12} className="mt-5">
          <div className='d-flex flex-column flex-md-row flex-lg-row flex-xl-row'>
            <div><Card/></div>
            <div><Card/></div>
            <div><Card/></div>
            <div><Card/></div>
          </div>
            {/* <Card className="overflow-hidden mt-4 px-4 d-flex align-center">
              <div>
                <Row>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Device Name</th>
                        <th scope="col">Device Model</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Gyser 1</td>
                        <td>Gy 98768</td>
                        <td>18</td>
                        <td>Running</td>
                      </tr>
                      <tr>
                        <td>Gyser 2</td>
                        <td>Gy 988</td>
                        <td>12</td>
                        <td>Ware House</td>
                      </tr>
                      <tr>
                        <td>Gyser 3</td>
                        <td>Gy 968</td>
                        <td>20</td>
                        <td>Stopped</td>
                      </tr>
                      <tr>
                        <td>Gyser 4</td>
                        <td>Gy 988</td>
                        <td>12</td>
                        <td>Ware House</td>
                      </tr>
                      <tr>
                        <td>Gyser 5</td>
                        <td>Gy 98768</td>
                        <td>18</td>
                        <td>Running</td>
                      </tr>
                    </tbody>
                  </table>
                </Row>
              </div>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Devices;
