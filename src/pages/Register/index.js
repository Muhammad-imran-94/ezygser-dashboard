import { useState } from "react";
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

const Register = (props) => {
  let { history } = props;

  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password:""
  });

  let duplicateUserData= {...userData}

  console.log(userData);
  
  return (
    <>
      <div className="account-pages">
        <Container className="">
          <Row className="justify-content-center align-items-center ">
            <Col md={8} lg={6} xl={5} className="mt-5">
              <Card className="overflow-hidden">
                <div className="bg-purple bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-white p-4">
                        <h5>Free Register</h5>
                        <p>Get your free account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-2">
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                    >
                      <Row className="justify-content-center d-flex mb-3">
                      <div className="col">
                        <Label className="form-label">First Name</Label>
                        <Input
                          id="fname"
                          name="fname"
                          className="form-control"
                          placeholder="First Name"
                          type="text"
                          autoComplete="off"
                        />
                        </div>
                        <div className="col">
                        <Label className="form-label">Last Name</Label>
                        <Input
                          id="device_name"
                          name="device_name"
                          className="form-control"
                          placeholder="Last Name"
                          type="text"
                          autoComplete="off"
                        />
                      </div>
                      </Row>
                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          type="email"
                          autoComplete="off"
                          onChange={(e)=>{
                            duplicateUserData.email=e.target.value;
                            setUserData({ ...duplicateUserData });
                          }}
                          
                        />
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="off"
                          onChange={(e)=>{
                            duplicateUserData.password=e.target.value;
                            setUserData({ ...duplicateUserData });
                          }}
                        />
                      </div>

                      <div className="mt-4 d-grid">
                        <button
                          className="btn btn-purple btn-block "
                          type="submit"
                        >
                          Create Account
                        </button>
                      </div>

                      <div className="mt-4 mb-4 text-center">
                        <p>
                          By registering you agree to the Egyzer{" "}
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <label>Already have an account ? &nbsp;
                  <span className="link" onClick={() => {
                   history.push("/");
                 }}>
                     Sign in</span></label>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
