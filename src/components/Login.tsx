import { ReactComponent as LogoWithText } from '../spendbook-logo-with-text.svg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log('setting shit');
    localStorage.setItem('isAuthenticated', 'yes');
    navigate('');
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8  ">
        <div className=" w-full max-w-md space-y-8 rounded-lg border border-primary-900 bg-white px-8 pt-16 pb-8">
          <div className="flex flex-col items-center justify-center">
            <LogoWithText />
            <p className="mt-8 text-center text-secondary text-base">Enter you account details to continue</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
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
                  className=" w-full appearance-none rounded-lg border  border-primary-900 px-3 py-2 text-gray-900 placeholder-secondary focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500  sm:text-sm"
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
                    className="w-full appearance-none rounded-lg border border-primary-900 px-3 py-2 text-gray-900 placeholder-secondary focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    placeholder="Password"
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                    onClick={togglePasswordVisible}
                  >
                    {!passwordVisible ? (
                      <EyeSlashIcon className="h-5 w-5 text-primary-900" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-primary-900" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="relative flex w-full justify-center rounded-lg border border-primary-900 bg-primary-900 bg-opacity-20 py-2 px-4 font-bold  text-primary-900 text-base"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
