import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "@constants/routes";
import { useAuth } from "@contexts/AuthContext";
import { ErrorMessage } from "@components/index";

export default function ResetPassword(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { resetPassword } = useAuth();
  const history = useHistory();

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const email: string = emailRef.current.value;
    setLoading(true);
    resetPassword(email)
      .then(() => {
        history.push(LOGIN_ROUTE);
      })
      .catch(() => {
        setError("An error has occurred!");
        setLoading(false);
      });
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
        <Link className="auth_link" to={LOGIN_ROUTE}>
          Log in
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
