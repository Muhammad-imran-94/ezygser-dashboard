import SendRequest from "../../components/SendRequest";

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

// import images
import profileImg from "../../assets/images/profile-img.png";

const Index = (props) => {
  let { history } = props;
  return (
    <>
      <div className="account-pages">
        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col md={7} lg={5} xl={5}>
              <Card className="overflow-hidden mt-4">
                <div className="bg-purple">
                  <Row>
                    <Col className="col-7">
                      <div className="text-white p-4">
                        <h5>Forget password!</h5>
                        <p>Reset with email.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <div className="p-2">
                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                  >
                    <SendRequest
                      text={"Enter Your email to send password reset request "}
                      labelText={"Email"}
                      width={"w-100"}
                    />
                  </Form>
                </div>
              </Card>
              <div className="text-center mt-5">
                <label>Go Back to &nbsp;
                  <span className="link" 
                  onClick={() => {
                   history.push("/");
                 }}>
                    Login </span></label>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
