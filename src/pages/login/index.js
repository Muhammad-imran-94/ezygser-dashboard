import React, { useState } from "react";

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

const Login = (props) => {
  let { history } = props;
  const [loginData, setLoginData] = useState({
    email: "",
    password:""
  });

  let duplicateLoginData= {...loginData}
  console.log(loginData);
  return (
    <>
      <div className="account-pages">
        <Container className="">
          <Row className="justify-content-center align-items-center ">
            <Col md={7} lg={5} xl={5} >
              <Card className="overflow-hidden mt-4">
                <div className="bg-purple">
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
                          autoComplete="off"
                          onChange={(e)=>{
                            duplicateLoginData.email=e.target.value;
                            setLoginData({ ...duplicateLoginData });
                          }}
                        />
                      </div>
                      <div className="mb-1">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          autoComplete="off"
                          onChange={(e)=>{
                            duplicateLoginData.password=e.target.value;
                            setLoginData({ ...duplicateLoginData });
                          }}
                        />
                      </div>
                      <div className="m-0 p-0 d-flex justify-content-end">
                        <label className="link"
                        onClick={() => {
                          history.push("/forget-password");
                        }}
                        >
                          Forget Password? 
                        </label>
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-purple btn-block "
                          type="submit"
                          onClick={() => {
                            history.push("/dashboard");
                          }}
                        >
                          Log In
                        </button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="text-center mt-5">
                <label>Not registerd Yet ? &nbsp;
                  <span className="link" 
                  onClick={() => {
                   history.push("/sign-up");
                 }}>
                     Sign Up </span></label>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
