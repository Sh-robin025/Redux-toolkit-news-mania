import React from 'react';
import FbLogin from '../fbLogin';
import { IoNewspaper } from 'react-icons/io5'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
    const user = useSelector(state => state.user.isSignedIn)
    const history = useHistory()

    return (
        <>
            {!user ? <div className="d-flex justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}>
                <div className="text-center">
                    <IoNewspaper style={{ fontSize: '100px' }} className="text-info" />
                    <div>
                        <div className="">
                            <h1>Welcome To News-Mania</h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                        <FbLogin />
                    </div>
                </div>
            </div> : history.push('/news')}
        </>
    );
};

export default Welcome;