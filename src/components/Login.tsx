import { useState, type FormEvent } from "react";
import "../styles/login.scss";

import logo from "../assets/icons/logo.svg";
import pablo from "../assets/icons/pablo-sign-in.svg";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt='Lendsqr logo' />
            </div>

            <main className='log-in-wrapper'>
                <div className='pablo'>
                    <img src={pablo} alt='pablo signing in' />
                </div>

                <section className='form-wrapper'>
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>

                    <form onSubmit={submitHandler}>
                        <div className='log-in-form'>
                            <label htmlFor='email'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                />
                            </label>

                            <label htmlFor='password'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    placeholder='Password'
                                />

                                <button
                                    type='button'
                                    onClick={togglePassword}
                                    className={showPassword ? "showing" : ""}>
                                    <span className='show'>SHOW</span>
                                    <span className='hide'>HIDE</span>
                                </button>
                            </label>

                            <span className='forgot'>forgot password?</span>

                            <button type='submit'>log in</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Login;
