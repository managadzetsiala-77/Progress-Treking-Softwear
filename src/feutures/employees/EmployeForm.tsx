export default function EmployeForm() {
  return (
    <>
      <div className="w-screen h-screen bg-[rgba(0,0,0,0.1)] backdrop-blur-[5px] fixed flex justify-center items-center">
        <form className="w-228.25 bg-white pt-10 px-12.5 pb-15 rounded-[10px]">
          <img className="ml-auto cursor-pointer" src="images/Cancel.svg" alt="cencel icon" />
          <h2 className="self-stretch text-center justify-start text-neutral-800 text-3xl font-semibold font-['FiraGO'] mt-9.25 mb-11.25">
            თანამშრომლის დამატება
          </h2>
          <div className="flex flex-col gap-11.25 ">
            <div className="w-full flex gap-11.25">
              <label className="w-full flex flex-col font-medium" htmlFor="">
                სახელი*
                <input
                  className="w-full border border-[#CED4DA] outline-0 rounded-md p-2.5 mb-2 mt-0.75"
                  type="text"
                  id="name "
                />
                <div className="flex items-center">
                  <img src="images/check.svg" alt="" />
                  <p className="font-normal text-gray-500 text-[10px]">
                    მინიმუმ 2 სიმბოლო
                  </p>
                </div>
              </label>
              <label className="w-full flex flex-col font-medium" htmlFor="">
                გვარი*
                <input
                  className="w-full border border-[#CED4DA] outline-0 rounded-md p-2.5 mb-2 mt-0.75"
                  type="text"
                  id="name "
                />
                <div className="flex items-center">
                  <img src="images/check.svg" alt="" />
                  <p className="font-normal text-gray-500 text-[10px]">
                    მინიმუმ 2 სიმბოლო
                  </p>
                </div>
              </label>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="justify-start text-neutral-700 text-sm font-medium font-['FiraGO']"
              >
                ავატარი*
              </label>
              <div className="h-30 p-2 flex justify-center items-center bg-amber-100 border border-dashed border-[#CED4DA] mt-2 rounded ">
                <label
                  className="flex flex-col justify-center items-center "
                  htmlFor="avatar"
                >
                  <img src="images/gallery-export.svg" alt="" />
                  ატვირთე ფოტო
                </label>
                {/* <div className="w-22 h-22 bg-gray-400 rounded-full overflow-hidden relative">
                  <img className="w-full h-full" src="" alt="avatar" />
                  <img
                    className="absolute bottom-0 left-14  "
                    src="images/Frame.svg"
                    alt=""
                  />
                </div> */}
                <input type="file" id="avatar" hidden />
              </div>
            </div>
            <label className="flex flex-col items-start" htmlFor="departments">დეპარტამენტი*
                <select  id="departments" className="w-91 border border-[#CED4DA] mt-0.75 p-2.5 outline-0 rounded ">
                    <option value=""></option>
                    <option value="test">test</option>
                </select>
            </label>
          </div>
          <div className="mt-9.5 flex justify-end gap-4">
            <button className="cursor-pointer border border-[#8338EC] py-2.5 px-4 rounded-[5px]  text-neutral-700 text-base font-normal font-['FiraGO']">გაუქმება</button>
            <button className="cursor-pointer px-5 py-2.5 rounded-[5px] border border-[#8338EC] bg-[#8338EC] text-white text-lg font-normal font-['FiraGO']">დაამატე თანამშრომელი</button>
          </div>
        </form>
      </div>
    </>
  );
}
