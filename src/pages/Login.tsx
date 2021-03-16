import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routeConstants } from "@constants";
import { ErrorMessage } from "@components";
import { authActions } from "@store/auth";
import { CommonState } from "@store";

export default function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const passwordRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isAuthorization = useSelector(
    (state: CommonState) => state.auth.isAuthorization
  );

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;

    setError("");
    setLoading(true);
    dispatch(authActions.login(email, password));
  }

  if (isAuthorization) {
    return <Redirect to={routeConstants.HOME_ROUTE} />;
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
        <Link className="auth_link" to={routeConstants.RESET_PASSWORD_ROUTE}>
          Forgot password?
        </Link>
        <div className="auth_bottom">
          <p className="auth_bottom__title">Need an account?</p>
          <Link
            className="auth_bottom__link"
            to={routeConstants.REGISTER_ROUTE}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
