import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <h2 className='font-bold mb-5'>Login With</h2>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;
