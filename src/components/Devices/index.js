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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Devices;
