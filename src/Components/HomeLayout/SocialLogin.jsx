import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='px-2 mb-4 space-y-4'>
            <h2 className="font-bold text-xl ">Login With</h2>
            {/* Google */}
            <button className="btn btn-outline btn-secondary w-full">
            <FcGoogle size={25} />
                Login with Google
            </button>
            {/* GitHub */}
            <button className="btn btn-outline btn-primary w-full ">
                <FaGithub size={25}></FaGithub>
                Login with GitHub
            </button>
        </div>
    );
};

export default SocialLogin;