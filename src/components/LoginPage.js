import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
// import { firebaseConfig } from '../firebase/config';
import { app } from '../firebase/config';
import { AuthContext } from './Auth';
// import SignUpPage from './SignUpPage';

const LoginPage = ({ history }, signUpFunction) => {

    // const [hasAccount, setHasAccount] = useState(false);

    const loginFunction = useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await 
                    app.auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
                
            } catch (error) {
                alert(error);
            }
        }, [history]
    );

    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser);

    if (currentUser) {
        // console.log(currentUser.uid);
        // There is no currentUser coming from context, so Login always return Login form from below
        return <Redirect to='/' />;
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={loginFunction}>
                <label className="signUpLabel">
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label className="signUpLabel">
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
                <br />
                <br />
                {/* <button onClick={<Redirect to={'/signup'}/>}>Sign Up</button> */}
    {/* <button onClick={(<SignUpPage />)}>Sign Up First</button> */}
    {/* <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={loginFunction}>Sign in</button>
                            <p>Don't have an account? <span onClick={()=> setHasAccount(!hasAccount) (<SignUpPage />)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={signUpFunction} >Sign up</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div> */}
            </form>
        </div>
    )
}

export default withRouter(LoginPage);