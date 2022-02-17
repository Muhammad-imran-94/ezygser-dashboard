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
import profileImg from "../assets/images/profile-img.png";

const Login = () => {
  return (
    <>
      <div className="account-pages">
        <Container>
          <Row className="justify-content-center">
            <Col md={7} lg={5} xl={5} className="mt-5">
              <Card className="overflow-hidden mt-4">
                <div className="bg-primary">
                  <Row>
                    <Col className="col-7">
                      <div className="text-white p-4">
                        <h5>Welcome Back !</h5>
                        <p>Sign in to continue.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-2 input-card">
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                    >
                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                        />
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                      <div className="mt-5 text-center">
                        <p className="mb-4">
                          By registering you agree to the Egyzer{" "}
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>Already have an account ?</p> 
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
