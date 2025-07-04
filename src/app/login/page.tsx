import Image from 'next/image';
import React from 'react';
import LoginForm from './components/LoginForm';
import Link from 'next/link';

const Login = () => {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
          height={100}
          width={100}
            alt="Your Company"
            src="/assets/logo.svg"
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
       <LoginForm/>

         <p className="mt-10 text-center text-sm/6 text-gray-500">
            Dont have an account?{' '}
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;