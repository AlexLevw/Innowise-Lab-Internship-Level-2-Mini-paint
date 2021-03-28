import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { routeConstants } from "@constants";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@store/auth";
import { CommonState } from "@store";
import { EmailInput, SubmitBtn } from "@components/auth";

export default function ResetPassword(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();

  const isAuthorization = useSelector(
    (state: CommonState) => state.auth.isAuthorization
  );
  const isLoading = useSelector((state: CommonState) => state.auth.isLoading);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    dispatch(authActions.setIsLoading(true));
    dispatch(authActions.resetPassword(email));
  }

  if (isAuthorization) {
    return <Redirect to={routeConstants.HOME_ROUTE} />;
  }

  return (
    <div className="page_wrapper">
      <div className="auth_container">
        <p className="auth_title">Reset Password</p>
        <form className="auth_form" onSubmit={handleSubmit}>
          <EmailInput setEmail={setEmail} />
          <SubmitBtn text="SEND" disabled={isLoading} />
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
