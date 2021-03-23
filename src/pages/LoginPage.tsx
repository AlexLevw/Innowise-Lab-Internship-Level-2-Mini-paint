import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routeConstants } from "@constants";
import { EmailInput, PasswordInput, SubmitBtn } from "@components/auth";
import { authActions } from "@store/auth";
import { CommonState } from "@store";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isAuthorization = useSelector(
    (state: CommonState) => state.auth.isAuthorization
  );

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    setIsLoading(true);
    dispatch(authActions.login(email, password));
  }

  const hasError = !(email && password);
  const btnDisable = hasError || isLoading;

  if (isAuthorization) {
    return <Redirect to={routeConstants.HOME_ROUTE} />;
  }

  return (
    <div className="auth_wrap">
      <div className="auth_container">
        <p className="auth_title">Login</p>
        <form className="auth_form" onSubmit={handleSubmit}>
          <EmailInput setEmail={setEmail} />
          <PasswordInput setPassword={setPassword} />
          <SubmitBtn text="LOGIN" disabled={btnDisable} />
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
