import { ReactComponent as LogoWithText } from '../spendbook-logo-with-text.svg';

export default function Header() {
  return (
    <header className="left-0 top-0 flex h-header w-full flex-col items-center justify-center ">
      <div className="flex w-full flex-row items-center justify-between gap-4 py-6 px-0 ">
        <LogoWithText className="h-32px  flex w-auto flex-row items-center justify-center gap-2 p-0 " />
        <button className="flex h-10 w-auto rounded-lg bg-primary bg-opacity-20 py-2 px-6 font-bold text-primary text-base">
          Logout
        </button>
      </div>
    </header>
  );
}
