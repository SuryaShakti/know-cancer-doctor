import React,{useState} from "react";
import { FileUploader } from "react-drag-drop-files";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRouter } from "next/router";


const fileTypes = ["JPEG", "PNG", "GIF"];

const OtherInfo = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="w-4/6 ">
      <div className="bg-white rounded-md p-3 relative">
        {/* <img
          src={"/images/loginround.png"}
          className="w-28 rounded-md absolute -top-14 left-1/2 -translate-x-1/2 "
        /> */}
        <div className="font-bold text-gray-800 text-center text-xl py-2">
          SignUp
        </div>
        <div className=" grid md:grid-cols-2">
          <div>
            {" "}
            <div className="text-[#936CAB] ">Medical School</div>
            <div className="my-2">
              <div className="relative mt-2 shadow-sm px-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="text-[#936CAB] ">Degree</div>
            <div className="relative mt-2 shadow-sm px-2">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="text-[#936CAB] ">Year</div>
            <div className="relative mt-2  rounded-md shadow-sm px-2">
              <select
                text="selcet"
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="font-bold text-gray-800 text-left text-base py-2">
          Medical Board License
        </div>{" "}
        <div className="grid md:grid-cols-2">
          <div>
            <div className="text-[#936CAB] ">License Country</div>
            <div className="relative mt-2  rounded-md shadow-sm px-2">
              <select
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="text-[#936CAB] ">License Number</div>
            <div className="relative mt-2  rounded-md shadow-sm px-2">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="text-[#936CAB] ">NPI Number</div>
            <div className="relative mt-2  rounded-md shadow-sm px-2">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {" "}
          <div>
            <div className="text-[#936CAB] pt-2">Upload Medical License</div>
            <div className="App py-4">
              <FileUploader
                multiple={true}
                style={{ display: "block" }}
                handleChange={handleChange}
                name="file"
                // types={fileTypes}
              />
              <p>{file ? `File name: ${file[0].name}` : ""}</p>
            </div>
          </div>
        </div>
        <div onClick={() => router.push("/signup3")}>
          <PrimaryButton text={"Next"} color={"bg-[#575AE5]"} />
        </div>
        {/* <SignUpDialog open={open} setOpen={setOpen} /> */}
      </div>
    </div>
  );
};

export default OtherInfo;
