import Layout from '../../components/layout/layout';

import { Row, Col, Card, Container } from "reactstrap";

 const Index = () => {
  return (
    <>
<Layout>
<Container className="position-relative mt-5 mt-md-0 mt-lg-0 mt-xl-0">
        <Row className="justify-content-center">
          <Col md={12} lg={12} xl={12} className="mt-4">
            <Card className="overflow-hidden mt-4 px-4 d-flex align-center">
              <div>
                <Row>
                   schedule devices
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      </Layout>
    </>
  )
}

export default Index;

