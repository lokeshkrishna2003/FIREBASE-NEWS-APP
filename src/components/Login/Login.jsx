import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { load, login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login">
        <div className="loginbody">
          <h2 className="justify-center text-center mb-4">Log In</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                autoComplete="username"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                className="form-control"
                autoComplete="current-password"
                ref={passwordRef}
              />
            </Form.Group>

            <div className="loginbtncontainer">
              <Button disabled={loading} className="loginbtn" type="submit">
                Log In
              </Button>
            </div>
          </Form>

          <div className="w-100 text-center mt-3">
            <Link className="logintext" to="/forgot-password">
              Forgot Password?
            </Link>
            <div className="w-100 text-center mt-2">
              Do not have an account?{" "}
              <Link className="logintext" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
