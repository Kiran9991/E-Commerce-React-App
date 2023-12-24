import { useContext, useRef, useState, Fragment } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8IykqejjI79ePKYsCrYciX6Vs8G6nySI`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail.current.value,
            password: enteredPassword.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Authentication Failed`);
      }

      alert(`Successfully logged in ${data.email}`);
      localStorage.setItem("email", data.email);
      authCtx.login(data.idToken);

      enteredEmail.current.value = "";
      enteredPassword.current.value = "";

      history.replace("/products");
    } catch (err) {
      alert(err.message);
    }

    setIsLoading(false);
  };

  return (
    <Fragment>
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitFormHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={enteredEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={enteredPassword}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && <button type="submit">Login</button>}
            {isLoading && <p>Logging....</p>}
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
