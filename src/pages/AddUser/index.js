import SendRequest from "../../components/SendRequest";
import Layout from '../../components/layout/layout';

import {
    Row,
    Col,
    CardBody,
    Card,
    Container,
  } from "reactstrap";

const Index = () => {
  return (
    <>
    <Layout>
      <Container className="position-relative mt-5 mt-md-0 mt-lg-0 mt-xl-0">
        <Row className="justify-content-center ">
          <Col md={8} lg={10} xl={12} className="mt-4">
            <Card className="overflow-hidden mt-4">
              <CardBody className="pt-2 input-card">
                <SendRequest
                  text={
                    "Enter email of user you want to add to manage your devices. An invitation will be send to this email for the new credentials for new user."
                  }
                  labelText={"User Email"}
                  width={"w-50"}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Layout>
    </>
  );
};

export default Index;
