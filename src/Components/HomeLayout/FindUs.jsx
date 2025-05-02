import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='px-2'>
            <h2 className="text-xl font-bold mb-4">Find Us On</h2>
            <div className="join join-vertical w-full ">
                <button className="btn btn-outline justify-start join-item p-4"> <FaFacebook></FaFacebook> Facebook</button>
                <button className="btn btn-outline justify-start join-item p-4"><FaTwitter></FaTwitter> Twiter</button>
                <button className="btn btn-outline justify-start join-item p-4"> <FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;