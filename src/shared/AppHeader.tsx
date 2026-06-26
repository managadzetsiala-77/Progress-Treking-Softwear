import { Link } from "react-router-dom";

export default function AppHeader({
  onHandleForm,
}: {
  onHandleForm: () => void;
}) {
  return (
    <div>
      <header className="flex px-30 py-7.5 gap-10 items-center">
        <Link to={"/"} className=" mr-auto">
          <img className="mr-auto" src="/images/logo.svg" alt="logo" />
        </Link>

        <button
          onClick={onHandleForm}
          className="border border-[#8338EC] rounded-[5px] px-5 py-2.5  text-base font-normal font-['FiraGO'] cursor-pointer "
        >
          თანამშრომლის შექმნა
        </button>
        <Link to="/createtask">
          <button className="border bg-[#8338EC] text-white rounded-[5px] px-5 py-2.5  text-base font-normal font-['FiraGO'] cursor-pointer">
            + შექმენი ახალი დავალება
          </button>
        </Link>
      </header>
    </div>
  );
}
