import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Container = styled.div`
    height: 600px;
    background-color: #252525;
    color:white;

    .cont2 {
        margin-left: auto;
        margin-right: auto;
        width: 460px;
        max-width: 100%;
        margin-top: 30px;
    }
    .heading > h2 {
        padding-top:20px;
        text-align: center;
        font-weight: 600;
        font-size: 45px;
    }
    .heading~p {
        text-align: center;
        margin-top:15px;
    }
`;

const Form = styled.form`
margin-top:30px;
    .input-box,
    .login-password {
        margin-bottom: 20px;
    }

    .input-box > input {
        // color:black;
        width: 100%;
        height:52px;
        font-size: 18px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 0px 18px;
        box-sizing: border-box;
        background-color: #252525;
        border-radius:10px;
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


   ::placeholder {
        color: red;
        opacity: 1;
    }
   


    .action-bottom > span {
        text-align: center;
        margin: 10px 0;
        display: block;
        transition: color 0.1s, border-color 0.1s;
        font-size: inherit;
        letter-spacing: 1px;
    }

    .action-bottom > span > a {
        color:#9d938b ;
    }

    .action-bottom > span > a:hover {
        text-decoration: underline;
        cursor: pointer;
        color: red;
        text-decoration: underline;
        background-color: transparent;
        transition: color 0.1s, border-color 0.1s;
    }
`;

export function Register() {
    const [data, setData] = useState({});
    const [flag, setFlag] = useState(false); //to check if registration was successful

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    };

    const postData = async () => {
        try {
            await axios.post("http://localhost:3002/users", data);
            setFlag(true);
        } catch (e) {
            alert("Invalid Input");
        }
    };

    return (
        <Container>
                <div className="cont2">
                    <div className="heading">
                        <h2>Register</h2>
                    </div>
                    <p>Please fill in the fields below:</p>
                    <Form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                required
                                name="first_name"
                                onChange={handleChange}
                                type="text"
                                id="customer_name"
                                placeholder="First name"
                            />
                        </div>
                        <div className="input-box">
                            <input
                                required
                                name="last_name"
                                onChange={handleChange}
                                type="text"
                                id="customer_lname"
                                placeholder="last name"
                            />
                        </div>
                        <div className="input-box">
                            <input
                                required
                                name="email"
                                onChange={handleChange}
                                type="email"
                                id="customer_email"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="input-box">
                            <input
                                required
                                name="password"
                                onChange={handleChange}
                                type="password"
                                id="customer_password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="action-bottom">
                            <p>
                                <input type="submit" value="Create" />
                            </p>
                            <span>
                            Already have an account?<Link to="/account/login">Login</Link>    
                            </span>
                        </div>
                    </Form>
                    {flag ? (
                        <Navigate to="/account/login" />
                    ) : (
                        <Navigate to="/account/register" />
                    )}
                </div>
          
        </Container>
    );
}
