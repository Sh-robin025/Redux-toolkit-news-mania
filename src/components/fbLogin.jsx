import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { userData, userSignedIn } from '../features/user/userSlice';

const FbLogin = () => {
    const dispatch = useDispatch();
    
    const handleFbLogin = (response) => {
        dispatch(userSignedIn(true))
        dispatch(userData({
            name: response.name,
            email: response.email,
            image: response.picture,
        }))
        // console.log(response)
    }

    return (
        <div>
            <FacebookLogin
                appId="598107684485568"
                autoLoad={false}
                fields="name,email,picture"
                onClick={handleFbLogin}
                callback={handleFbLogin}
            />
        </div>
    );
};

export default FbLogin;
