import React, { use } from 'react';
import { FaUser, FaImage, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { CreatUser, setUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        CreatUser(email, password)
            .then((res) => {
                // Signed up 
                const user = res.user;
                // console.log(user);
                setUser(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);
                
                // ..
            });
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md bg-white dark:bg-base-100 rounded-lg shadow-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center">Register your account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label" htmlFor="name">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="input input-bordered pl-10 w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label" htmlFor="photo">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <div className="relative">
                            <FaImage className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="url"
                                id="photo"
                                placeholder="Enter your photo URL"
                                className="input input-bordered pl-10 w-full"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="input input-bordered pl-10 w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="input input-bordered pl-10 w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" required />
                            <span className="label-text text-sm">
                                Accept <span className="font-bold">Term & Conditions</span>
                            </span>
                        </label>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-neutral w-full">
                        Register
                    </button>

                    <p className="text-center font-bold text-sm text-gray-500 mt-2">
                        Already have an account?{" "}
                        <Link to='/auth/login' className="text-blue-700 font-semibold hover:underline">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;