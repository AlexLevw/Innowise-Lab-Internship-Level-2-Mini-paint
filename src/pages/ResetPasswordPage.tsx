import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { routeConstants } from "@constants";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "@components";
import { authActions } from "@store/auth";
import { CommonState } from "@store";

export default function ResetPassword(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isAuthorization = useSelector(
    (state: CommonState) => state.auth.isAuthorization
  );

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const email: string = emailRef.current.value;
    setLoading(true);
    setError("");
    dispatch(authActions.resetPassword(email));
  }

  if (isAuthorization) {
    return <Redirect to={routeConstants.HOME_ROUTE} />;
  }

  return (
    <div className="auth_wrap">
      {error && <ErrorMessage massage={error} />}
      <div className="auth_container">
        <p className="auth_title">Reset Password</p>
        <form className="auth_form" onSubmit={handleSubmit}>
          <input
            className="auth_t-input"
            ref={emailRef}
            type="text"
            placeholder="e-mail"
            required
          />
          <button className="auth_submit-btn" type="submit" disabled={loading}>
            SEND
          </button>
        </form>
        <Link className="auth_link" to={routeConstants.LOGIN_ROUTE}>
          Log in
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
