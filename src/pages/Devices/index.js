import Card from "../../components/Card";
import { Row, Col, Container } from "reactstrap";
import Layout from '../../components/layout/layout'

export const Devices = () => {
  return (
    <>
    <Layout>
      <Container className="position-relative mt-5 mt-md-0 mt-lg-0 mt-xl-0">
        <Row className="justify-content-center">
          <Col md={8} lg={12} xl={12} className="mt-5">
            <Row>
              <div className="d-flex flex-wrap flex-column flex-lg-row flex-xl-row justify-content-between">
                <div className="single-tile">
                  <Card
                    tileTitle={"Devices"}
                    tileInfo={
                      <ul className="list-unstyled m-0 ">
                        <li>Gy 003</li>
                        <li>Gy 003</li>
                        <li>Gy 003</li>
                        <li>Gy 003</li>
                      </ul>
                    }
                  />
                </div>
                <div className="single-tile">
                  <Card tileTitle={"Temperature"} 
                  tileInfo={
                    <ul className="list-unstyled m-0 ">
                      <li>30</li>
                      <li>20</li>
                      <li>15</li>
                      <li>25</li>
                    </ul>
                  }
                  />
                </div>
                <div className="single-tile">
                  <Card tileTitle={"Status"} 
                  tileInfo={
                    <ul className="list-unstyled m-0 ">
                      <li>Running</li>
                      <li>Stopped</li>
                      <li>Scheduled</li>
                      <li>Running</li>
                    </ul>
                  }
                  />
                </div>
                <div className="single-tile">
                  <Card tileTitle={"Sechdule"} 
                  tileInfo={
                    <ul className="list-unstyled m-0 ">
                      <li>Not Set</li>
                      <li>12 Am</li>
                      <li>5:30 Pm</li>
                      <li>Not Set</li>
                    </ul>
                  }
                  />
                </div>
              </div>
            </Row>
          </Col>
          
        </Row>
      </Container>
      </Layout>
      </>
  );
};

export default Devices;
