import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 600px;
  background-color: #252525;
  color: white;

  a {
    color: #ea2127 !important;
    font-weight: 700;
  }

  .cont {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  .cont2 {
    margin-left: auto;
    margin-right: auto;
    width: 460px;
    max-width: 100%;
    margin-top: 30px;
  }

  .heading {
    margin: 10px 0px 40px;
  }

  .heading~p {
    text-align: center;
    margin-bottom:15px;
    margin-top:-15px;
}
  .heading > h2 {
    padding: 20px 0 10px  0;
    text-align: center;
    font-weight: 600;
    font-size: 45px;
  }
`;

const Form = styled.form`
  .socials > iframe {
    width: 100%;
    max-width: 100%;
    padding-top: 0px;
    margin-bottom: 5px;
    border: 0px;
    height: 50px;
  }

  .login-email,
  .login-password {
    margin-bottom: 20px;
  }



  .login-email > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
    height:52px;
    background-color: #252525;
    border-radius:10px;
  }

  .text-over-input {
    position: relative;
    display: block;
  }
  .text-over-input > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
    background-color: #252525;
    border-radius:10px;
  }

  .forgot-password {
    position: absolute;
    top: 50%;
    right: 20px;
    line-height: 1em;
    margin-top: -0.5em;
    font-size: 12.8px;
    transition: color 0.1s, border-color 0.1s;
    text-decoration: none;
    
  }

  .forgot-password:hover {
    cursor: pointer;
    color: red;
    text-decoration: underline;
    background-color: transparent;
  }

  input:focus {
    border-color: #000;
  }

  .action-bottom {
    margin-top: 27px;
    height:55px;
  }

  .action-bottom > p {
    margin-bottom: 1em;
    font-weight: 500;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  .action-bottom > p > input {
    font-weight: 700;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    background: red;
    border: 1px solid red;
    font-size: 16px;
    line-height: 1em;
    height: auto;
    margin: 0;
    padding: 11px 25px;
    vertical-align: middle;
    text-align: center;
    color: white;
    transition: background-color 0.1s, color 0.1s, border-color 0.1s,
      opacity 0.1s;
    display: inline-block;
  }

  .action-bottom > span {
    margin: 10px 0;
    display: block;
    color:#9d938b ;
    transition: color 0.1s, border-color 0.1s;
    text-align:center;
  }
   
`;

const Forgot = styled.div`
  background-color: var(--white);
  padding-top: 70px;
  padding-bottom: 150px;

  .container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  .small-form {
    margin-left: auto;
    margin-right: auto;
    width: 420px;
    max-width: 100%;
  }

  .title {
    margin: 10px 0 40px;
  }

  .title > h2 {
    text-align: center;
    margin: 0 0 20px;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2em;
  }

  .title > p {
    margin: 10px 0;
    text-align: center;
  }

  .recover-email {
    margin-bottom: 20px;

    label {
      display: block;
      font-size: 16px;
      line-height: 1.4em;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      font-size: 16px;
      line-height: 16px;
      background: #fff;
      color: #000;
      border: 1px solid #d8d8d8;
      padding: 11px 15px;
      vertical-align: middle;
      max-width: 100%;
    }
  }

  .action-bottom {
    margin-top: 27px;

    p {
      text-align: center !important;
      margin-bottom: 1em;
    }
    button {
      cursor: pointer;
      border-radius: 5px;
      background: red;
      border: 1px solid red;
      color: #fff;
      font-size: 16px;
      font-family: inherit;
      font-weight: 500;
      font-style: inherit;
      line-height: 1em;
      height: auto;
      margin: 0;
      text-decoration: none !important;
      padding: 11px 25px;
      vertical-align: middle;
      text-align: center;
      display: inline-block;
      transition: background-color 0.1s, color 0.1s, border-color 0.1s,
        opacity 0.1s;
    }

    span {
      display: block;
      margin: 10px 0;
      text-align: center;
    }
    span:hover {
      color: red;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export function Login() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [flag, setFlag] = useState(false);
  const [forgotPass, setForgotPass] = useState("first");

  const getData = async () => {
    const res = await axios.get("https://mighty-reef-32699.herokuapp.com/users");
    setData(res.data);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let cred = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === pass) {
        cred = true;
        localStorage.setItem("id", data[i]._id);
        break;
      }
    }
    if (cred) {
      setFlag(true);
    } else {
      setFlag(false);
      alert("Incorrect email or password");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data)
  return forgotPass === "first" ? (
    <Container>
      <div className="cont">
        <div className="cont2">
          <div className="heading">
            <h2>Login</h2>
          </div>
          <p>Please enter your e-mail and password:</p>
          <Form onSubmit={handleSubmit}>
            <div className="socials">
              <iframe
                id="social_login_frame"
                title="Social Login Frame"
                src="https://social-login.oxiapps.com/widget?site=boatlifestylein.myshopify.com&amp;vt=928362&amp;parenturl=https://www.boat-lifestyle.com/account/login"
                scrolling="no"
              ></iframe>
            </div>
            <div className="login-email">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="customer_email"
                placeholder="E-mail"
              />
            </div>
            <div className="login-password">
              <div className="text-over-input">
                <input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  id="customer_password"
                  placeholder="Password"
                />
                <div
                  onClick={() => setForgotPass("second")}
                  className="forgot-password"
                >
                  Forgot your password?
                </div>
              </div>
            </div>
            <div className="action-bottom">
              <p>
                <input type="submit" value="Sign In" className="btn" />
              </p>
              <span>New customer?<Link to="/account/register">Create account{" "}</Link></span>
            </div>
          </Form>
          {flag ? <Navigate to="/" /> : ""}
        </div>
      </div>
    </Container>
  ) : forgotPass === "second" ? (
    <Forgot>
      <div className="container">
        <div className="small-form">
          <div className="title">
            <h2>Reset your password</h2>
            <p>We will send you an email to reset your password.</p>
          </div>
          <div className="recover-email">
            <label htmlFor="recover-email">Email</label>
            <input type="email" id="recover-email" />
          </div>
          <div className="action-bottom">
            <p>
              <button onClick={() => setForgotPass("third")}>Submit</button>
            </p>
            <span
              onClick={() => {
                setForgotPass("first");
              }}
            >
              Cancel
            </span>
          </div>
        </div>
      </div>
    </Forgot>
  ) : (
    <Forgot>
      <div className="container">
        <div className="small-form">
          <div className="title">
            <h2>Reset your password</h2>
            <p>We've sent you an email with a link to update your password.</p>
          </div>

          <div className="action-bottom">
            <p>
              <button onClick={() => setForgotPass("first")}>Sign in</button>
            </p>
          </div>
        </div>
      </div>
    </Forgot>
  );
}
