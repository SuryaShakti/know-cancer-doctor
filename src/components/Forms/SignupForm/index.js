import { useState } from "react";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import OtpInput from "@/components/OtpInput";
import { useRouter } from "next/router";
// import { UserIcon } from "@heroicons/react/solid";

const SignupForm = () => {
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();

  return (
    <div className="w-4/6">
      {" "}
      <div className="bg-white p-7 rounded-md">
        <div className="font-bold text-gray-800 text-center text-lg ">
          Sign Up
        </div>
        <div className=" grid md:grid-cols-2">
          <div>
            <div className=" grid md:grid-cols-1">
              <div>
                {" "}
                <div className="text-[#936CAD] ">Your name</div>
                <div className="my-1">
                  <div className="relative mt-2 shadow-sm">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full rounded border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" grid md:grid-cols-1">
              <div>
                {" "}
                <div className="text-[#936CAD] ">Phone Number</div>
                <div className="my-2">
                  <div className="relative mt-2 shadow-sm">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full rounded border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="ml-5 mt-10">
              {" "}
              <img
                src={"/images/Ellipse1.png"}
                className="w-18 rounded-md ml-7"
              />
              <div className="text-gray-500 text-sm ml-2">
                Add your profile picture
              </div>
            </div>
          </div>
        </div>

        <div className=" grid md:grid-cols-2 my-2 rounded-md">
          <div>
            <PrimaryButton text={"Send OTP"} color={"bg-[#575AE5]"} />
          </div>
        </div>
        <div className="text-[#936CAD]">OTP</div>
        <div className="my-3">
          <OtpInput otp={otp} setOtp={setOtp} />
        </div>
        <div className=" grid md:grid-cols-2">
          <div>
            {" "}
            <div className="text-[#936CAD]">Gender</div>
            <div className="my-2 mx-2">
              <div className="relative mt-2 shadow-sm">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="text-[#936CAD]">Speciality</div>
            <div className="my-2 mx-2 mb-4">
              <div className="relative mt-2 shadow-sm">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div onClick={() => router.push("/signup2")}>
          <PrimaryButton text={"Continue"} color={"bg-[#575AE5]"} />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
