import { ReactComponent as LogoWithText } from '../spendbook-logo-with-text.svg';

export default function Header() {
  return (
    <header className="left-0 top-0 flex h-header w-full flex-col items-center justify-center ">
      <div className="flex w-main flex-row items-center gap-4 py-6 px-0 ">
        <LogoWithText className="w-156px h-32px flex flex-row items-center justify-center gap-2 p-0 " />
        <div className="h-40px w-477px "></div>
        <button className="flex h-40px w-103px rounded-md border border-primary bg-primary bg-opacity-20 py-2 px-6 font-bold text-primary text-base">
          Logout
        </button>
      </div>
    </header>
  );
}
