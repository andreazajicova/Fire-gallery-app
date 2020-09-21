import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
// import { firebaseConfig } from '../firebase/config';
import { app } from '../firebase/config';

const SignUpPage = ({ history }) => {
    const signUpFunction = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await 
            app.auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
            console.log(app);
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="signUpForm">
            <form onSubmit={signUpFunction}>
            <h1>Sign up</h1>        
                <label className="signUpLabel">
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label className="signUpLabel">
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default withRouter(SignUpPage);