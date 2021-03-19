import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routeConstants } from "@constants";
import { ErrorMessage } from "@components";
import { authActions } from "@store/auth";
import { CommonState } from "@store";

export default function Registration(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const usernameRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const passwordRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const confirmPasswordRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isAuthorization = useSelector(
    (state: CommonState) => state.auth.isAuthorization
  );

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const email: string = emailRef.current.value;
    const username: string = usernameRef.current.value;
    const password: string = passwordRef.current.value;
    const passwordConfirm: string = confirmPasswordRef.current.value;

    setError("");
    if (password === passwordConfirm) {
      setLoading(true);
      dispatch(authActions.signup(email, username, password));
    } else {
      setError("Password do not match");
      setLoading(false);
    }
  }

  if (isAuthorization) {
    return <Redirect to={routeConstants.HOME_ROUTE} />;
  }

  return (
    <div className="auth_wrap">
      {error && <ErrorMessage massage={error} />}
      <div className="auth_container">
        <p className="auth_title">Sign up</p>
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
            ref={usernameRef}
            type="text"
            placeholder="user-name"
            required
          />
          <input
            className="auth_t-input"
            ref={passwordRef}
            type="password"
            placeholder="password"
            required
          />
          <input
            className="auth_t-input"
            ref={confirmPasswordRef}
            type="password"
            placeholder="confirm password"
            required
          />
          <button className="auth_submit-btn" type="submit" disabled={loading}>
            SIGNUP
          </button>
        </form>
        <div className="auth_bottom">
          <p className="auth_bottom__title">Already have an account?</p>
          <Link className="auth_bottom__link" to={routeConstants.LOGIN_ROUTE}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
