import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routeConstants } from "@constants";
import { authActions } from "@store/auth";
import { CommonState } from "@store";
import {
  EmailInput,
  NicknameInput,
  PasswordInput,
  PasswordConfirmInput,
  SubmitBtn,
} from "@components/auth";

export default function Registration(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const dispatch = useDispatch();

  const isAuthorization = useSelector(
    (state: CommonState) => state.auth.isAuthorization
  );
  const isLoading = useSelector((state: CommonState) => state.auth.isLoading);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    dispatch(authActions.setIsLoading(true));
    dispatch(authActions.signup(email, nickname, password));
  }

  const hasError = !(email && nickname && password && passwordConfirm);
  const btnDisable = hasError || isLoading;

  if (isAuthorization) {
    return <Redirect to={routeConstants.HOME_ROUTE} />;
  }

  return (
    <div className="page_wrapper">
      <div className="auth_container">
        <p className="auth_title">Sign up</p>
        <form className="auth_form" onSubmit={handleSubmit}>
          <EmailInput setEmail={setEmail} />
          <NicknameInput setNickname={setNickname} />
          <PasswordInput setPassword={setPassword} />
          <PasswordConfirmInput
            password={password}
            setPasswordConfirm={setPasswordConfirm}
          />
          <SubmitBtn text="SIGNUP" disabled={btnDisable} />
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
