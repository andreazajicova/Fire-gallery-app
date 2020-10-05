import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { app, projectFirestore } from '../firebase/config';
import { Link } from 'react-router-dom';

const SignUpPage = ({ history }) => {

    const signUpFunction = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await 
            app.auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(cred => projectFirestore.collection('users').doc(cred.user.uid).set({
                email: email.value
            }));
            history.push("/");
            
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="signUpForm">
            <form className="Form" onSubmit={signUpFunction}>
            <h1>Sign up</h1>        
                <label className="signUpLabel">
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label className="signUpLabel">
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button> <button><Link className="Link" to="/login">Go to Login</Link></button>
            </form>
        </div>
    );
};

export default withRouter(SignUpPage);