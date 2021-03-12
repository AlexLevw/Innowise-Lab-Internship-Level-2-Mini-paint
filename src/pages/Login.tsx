import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HOME_ROUTE,
  RESET_PASSWORD_ROUTE,
  REGISTER_ROUTE,
} from "@constants/routes";
import { useAuth } from "@contexts/AuthContext";
import { ErrorMessage } from "@components/index";

export default function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const passwordRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const history = useHistory();

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;

    setError("");
    setLoading(true);
    login(email, password)
      .then(() => {
        history.push(HOME_ROUTE);
      })
      .catch(() => {
        setError("Failed to login an account");
        setLoading(false);
      });
  }

  return (
    <div className="auth_wrap">
      {error && <ErrorMessage massage={error} />}
      <div className="auth_container">
        <p className="auth_title">Login</p>
        <form className="auth_form" onSubmit={handleSubmit}>
          <input
            className="auth_t-input"
            ref={emailRef}
            type="text"
            placeholder="e-mail"
            required
          />
          <input
            className="auth_t-input"
            ref={passwordRef}
            type="password"
            placeholder="password"
            required
          />
          <button className="auth_submit-btn" type="submit" disabled={loading}>
            LOGIN
          </button>
        </form>
        <Link className="auth_link" to={RESET_PASSWORD_ROUTE}>
          Forgot password?
        </Link>
        <div className="auth_bottom">
          <p className="auth_bottom__title">Need an account?</p>
          <Link className="auth_bottom__link" to={REGISTER_ROUTE}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
