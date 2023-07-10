import React, { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRouter } from "next/router";
import OtpDialog from "@/components/OtpDialog";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { sendOtp } from "@/apis/auth";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [phone, setPhone] = useState("");

  const validate = () => {
    if (phone.length !== 10) {
      console.log("hii");
      toast.error("Please enter a valid phone number.");
      return false;
    } else {
      return true;
    }
  };

  const sendOtpHandler = async () => {
    if (validate()) {
      try {
        const response = await sendOtp(phone);
        console.log("response from login form", response);
        setOpen(true);
      } catch (error) {
        toast.error(error ? error : "Something went wrong");
      }
    }
  };

  return (
    <div>
      {/* <img src={"/images/loginround.png"} className="w-28 rounded-md absolute m" /> */}

      <div className="bg-white p-5 py-4 rounded-md relative">
        <img
          src={"/images/loginround.png"}
          className="w-28 rounded-md absolute -top-14 left-1/2 -translate-x-1/2 "
        />
        <div className="text-gray-500 pt-14">Enter your phone number</div>
        <div className="my-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="number"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}

              className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <ToastContainer/>
          </div>
        </div>
        <div onClick={() => sendOtpHandler()} className="py-10">
          <PrimaryButton text={"Send Otp"} color={"bg-[#575AE5]"} />
        </div>
        <div className="mt- grid grid-cols-3 items-center text-gray-500">
          <hr className="border-[#CDCED1] border mx-2" />
          <p className="text-center text-black ">or continue with</p>
          <hr className="border-[#CDCED1] border mx-2" />
        </div>
        <div className="grid grid-cols-2 items-center mt-10 flex">
          <div className="h-14 w-14 border border-[#936CAB] rounded-md ml-20">
            <img src="/images/facebook.png" />
          </div>
          <div className="h-14 w-14 border border-[#936CAB] rounded-md ml-6">
            <img src="/images/google.png" />
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        Don't have an account?
        <span onClick={() => router.push("/signup1")} className="text-blue-500">
          SignUp
        </span>
      </div>

      {open && <OtpDialog phone={phone} open={open} setOpen={setOpen} />}
    </div>
  );
};

export default LoginForm;
