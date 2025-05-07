import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playGroundImage from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-5 rounded-lg'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img className='w-full' src={swimmingImage} alt="" />
                <img className='w-full'  src={classImage} alt="" />
                <img className='w-full' src={playGroundImage} alt="" />

            </div>
        </div>
    );
};

export default QZone;