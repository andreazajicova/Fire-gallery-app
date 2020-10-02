import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
// import { firebaseConfig } from '../firebase/config';
import { app } from '../firebase/config';
import { Link } from 'react-router-dom';
// import { auth } from 'firebase';
// import { projectFirestore } from '../firebase/config';
// import { AuthContext } from '../components/Auth';


const SignUpPage = ({ history }) => {
    // const collectionRef = projectFirestore.collection('users');
    // const [file, setFile] = useState(null);

    const signUpFunction = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await 
            app.auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            // console.log(email.value);
            // collectionRef.doc(currentUser).set({
            //     img: file
            // });
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