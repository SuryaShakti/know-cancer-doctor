import React, { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      {/* <img src={"/images/loginround.png"} className="w-28 rounded-md absolute m" /> */}

      <div className="bg-white p-5 py-10 rounded-md ">
        <div className="text-gray-500 pt-10">E-mail or phone number</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            {/* <div className="absolute inset-y-0 left-0 flex items-center border-r px-2">
            <select
              id="currency"
              name="currency"
              className="h-full rounded-l-md border-0 bg-transparent py-0 pl-1  border-y border-l border-r border-gray-300 bg-gray-200  text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>+91</option>
              <option>00</option>
              <option>442</option>
            </select> 
             +91
          </div> */}
          </div>
        </div>
        <div className="text-gray-500">Password or OTP</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-[#CDCED1] border mx-2" />
          <p className="text-center text-black ">or continue with</p>
          <hr className="border-[#CDCED1] border mx-2" />
        </div>
        <div className="grid grid-cols-2 items-center mt-10 flex">
          <div className="h-16 w-16 border border-[#936CAB] rounded-md ml-16"></div>
          <div className="h-16 w-16 border border-[#936CAB] rounded-md ml-4"></div>
        </div>

        <div onClick={() => router.push("/dashboard")} className="py-10">
          <PrimaryButton text={"Login"} color={"bg-[#575AE5]"} />
        </div>
      </div>
      <div className="mt-3 text-right">
        Don't have an account?
        <span className="text-black">SignUp</span>
      </div>
    </div>
  );
};

export default LoginForm;
