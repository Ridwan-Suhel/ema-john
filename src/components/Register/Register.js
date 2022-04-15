import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  if (user) {
    navigate("/home");
  }

  return (
    <div className="container">
      <h2 className="m-5 ps-5"> Please Register Here</h2>
      <div className="row justify-content-center">
        <div className="col-lg-5 mt-5">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <p className="lead">
            Have an account? <Link to="/login">Please Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
