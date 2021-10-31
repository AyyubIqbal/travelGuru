import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <div className="text-center mt-3">
                <button onClick={signInUsingGoogle} className="btn btn-primary">Sign-in With Google</button>
            </div>
        </div>
    );
};

export default Login;