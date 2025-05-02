import React from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-base-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-accent">Login Your Account</h2>
                <form className="space-y-4">
                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="input input-bordered pl-10 w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="input input-bordered pl-10 w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control flex flex-row justify-between items-center">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-primary hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Sign In
                    </button>

                    <p className="text-center font-bold text-sm text-gray-500 mt-2">
                        Don’t have an account?{" "}
                        <Link to='/auth/register' className="text-blue-700 font-semibold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;