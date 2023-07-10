import OtherInfo from "@/components/Forms/OtherInfoForm";

function index() {
  return (
    <div className="h-screen w-full grid md:grid-cols-2">
      <div className="w-full bg-white flex flex-col justify-center items-center">
        {/* PUT LOGIN SCREEN IMAGE HERE */}
        image should be here
      </div>
      <div className="mainbg bg-gray-200 flex justify-center items-center flex-col">
        {/* LOGIN FORM SHOULD BE HERE */}

        <OtherInfo />
      </div>
    </div>
  );
}

index.layout = null;

export default index;
