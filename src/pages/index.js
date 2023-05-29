import LoginForm from "@/components/Forms/LoginForm";
import Image from "next/image";
import SignupForm from "@/components/Forms/SignupForm";
import QAForm from "@/components/Forms/QAForm";
import OtherInfo from "@/components/Forms/OtherInfoForm";
import OtpForm from "@/components/Forms/OtpForm";
import RequestSentForm from "@/components/Forms/RequestSentForm";

function Home() {
  return (
    <div className="h-screen w-full grid md:grid-cols-2">
      <div className="w-full bg-white flex flex-col justify-center items-center">
        {/* PUT LOGIN SCREEN IMAGE HERE */}
        image should be here
      </div>
      <div className="mainbg bg-gray-200 flex justify-center items-center flex-col">
        {/* LOGIN FORM SHOULD BE HERE */}
        <LoginForm />
        {/* <SignupForm /> */}
        {/* <OtherInfo/> */}
        {/* <RequestSentForm/> */}
        {/* <OtpForm/> */}
      </div>
    </div>
  );
}

Home.layout = null;

export default Home;
