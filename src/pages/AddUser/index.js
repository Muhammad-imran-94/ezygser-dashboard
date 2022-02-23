import AddUser from "../../components/SendRequest";

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
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={10} xl={12} className="mt-5">
            <Card className="overflow-hidden mt-4">
              <CardBody className="pt-2 input-card">
                <AddUser
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
    </>
  );
};

export default Index;
