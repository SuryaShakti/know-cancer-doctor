import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { SearchIcon } from "@heroicons/react/outline";
import AddQADialog from "@/components/Dialogs/AddQ&ADialog";

const fileTypes = ["JPEG", "PNG", "GIF"];

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <div className="w-auto justify-start font-bold text-xl text-[#374151] ml-5">
          Profile
        </div>
        <div
          className="flex font-normal text-sm w-fit bg-[#936CAB] ml-16 rounded-md"
          onClick={() => setOpen(true)}
        >
          <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
            + Add New Information
          </button>
        </div>{" "}
      </div>
      <AddQADialog open={open} setOpen={setOpen} />
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="p-5">
        <div className=" grid md:grid-cols-4 ">
          <div>
            <div className="text-[#936CAB] ">Name</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-4 ">
          <div>
            <div className="text-[#936CAB] ">Phone Number</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 ">
          <div>
            <div className="text-[#936CAB] ">E-mail</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 ">
          <div>
            <div className="text-[#936CAB] ">Address</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-4 gap-2 ">
          <div>
            <div className="text-[#936CAB] ">City</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm ">
                <select
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="text-[#936CAB] ">Country</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm  ">
                <div className="absolute p-2 inset-y-0 left-1 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-[#936CAB] font-light"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="text-[#936CAB] ">Postal Code</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm ">
                <div className="absolute p-2 inset-y-0 left-1 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-[#936CAB] font-light"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-4 gap-2">
          <div>
            <div className="text-[#936CAB] ">License Country</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="text-[#936CAB] ">License Number</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm  ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-[#936CAB] ">NPI Number</div>
            <div className="my-1">
              <div className="relative mt-1 rounded-md shadow-sm  ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-2  text-gray-900 ring-1 ring-inset ring-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="py-2 text-[#936CAB] ">Upload Documentation</p>
          <FileUploader
            multiple={true}
            // style={{ display: "block", border: "solid" }}
            handleChange={handleChange}
            name="file"
            // types={fileTypes}
          />
          <p>{file ? `File name: ${file[0].name}` : ""}</p>
        </div>
        <div className="py-2 text-[#936CAB]">
          <p>Generate Code For Patients for Chatbot</p>
          <p className="text-lg font-bold text-black">456783</p>
          <div
            className="flex font-normal text-sm w-fit bg-[#936CAB] rounded-md my-2 "
            onClick={() => setOpen(true)}
          >
            <button className="whitespace-nowrap px-7 py-2 text-sm text-white font-semibold">
             Share Code
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
