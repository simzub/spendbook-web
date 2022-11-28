import { ReactComponent as LogoWithText } from '../spendbook-logo-with-text.svg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8  ">
        <div className=" w-full max-w-md space-y-8 rounded-lg border border-primary px-8 pt-16 pb-8">
          <div className="flex flex-col items-center justify-center">
            <LogoWithText />
            <p className="mt-8 text-center text-secondary text-base">Enter you account details to continue</p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex flex-col gap-8">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" w-full appearance-none rounded-lg border  border-primary px-3 py-2 text-gray-900 placeholder-secondary focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type={passwordVisible ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    className="w-full appearance-none rounded-lg border border-primary px-3 py-2 text-gray-900 placeholder-secondary focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                    onClick={togglePasswordVisible}
                  >
                    {!passwordVisible ? (
                      <EyeIcon className="h-5 w-5 text-primary" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" font-si group  relative flex w-full justify-center rounded-md border border-primary bg-primary bg-opacity-20 py-2 px-4 font-bold  text-primary text-base"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
