import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find us on</h2>
            <div>
            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item justify-start"> <FaFacebook></FaFacebook> Facebook</button>
                <button className="btn bg-base-100 join-item justify-start"> <BsTwitter></BsTwitter> Twitter</button>
                <button className="btn bg-base-100 join-item justify-start"> <BsInstagram></BsInstagram> Instagram</button>
            </div>
            </div>
        </div>
    );
};

export default FindUs;