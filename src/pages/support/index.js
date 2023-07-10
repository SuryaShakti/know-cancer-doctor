import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
// import AddQADialog from "@/components/Dialogs/AddQ&ADialog";
import SupportDialog from "@/components/Dialogs/SupportDialog";
import { getAllSupport } from "@/apis/support";
import { PaperClipIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";


const problems = [
  {
    id: "#JK2029",
    date: "November 9, 2023",
    issue: "This is the issue",
    details:
      "Lorem ipsum dolor sit amet consectetur. Sodales convallis sagittis blandit nisl euismod. Id diam massa non facilisi dolor non gravida at. Metus integer est sit sollicitudin ac duis elit. Aliquet diam nibh blandit enim elit. Sit cum blandit sed in. Commodo amet sed dictum hac. Eu egestas lacinia porttitor lectus eget sed quis nulla vel. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "#JK2029",
    date: "November 9, 2023",
    issue: "This is the issue",
    details:
      "Lorem ipsum dolor sit amet consectetur. Sodales convallis sagittis blandit nisl euismod. Id diam massa non facilisi dolor non gravida at. Metus integer est sit sollicitudin ac duis elit. Aliquet diam nibh blandit enim elit. Sit cum blandit sed in. Commodo amet sed dictum hac. Eu egestas lacinia porttitor lectus eget sed quis nulla vel. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "#JK2029",
    date: "November 9, 2023",
    issue: "This is the issue",
    details:
      "Lorem ipsum dolor sit amet consectetur. Sodales convallis sagittis blandit nisl euismod. Id diam massa non facilisi dolor non gravida at. Metus integer est sit sollicitudin ac duis elit. Aliquet diam nibh blandit enim elit. Sit cum blandit sed in. Commodo amet sed dictum hac. Eu egestas lacinia porttitor lectus eget sed quis nulla vel. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
  {
    id: "#JK2029",
    date: "November 9, 2023",
    issue: "This is the issue",
    details:
      "Lorem ipsum dolor sit amet consectetur. Sodales convallis sagittis blandit nisl euismod. Id diam massa non facilisi dolor non gravida at. Metus integer est sit sollicitudin ac duis elit. Aliquet diam nibh blandit enim elit. Sit cum blandit sed in. Commodo amet sed dictum hac. Eu egestas lacinia porttitor lectus eget sed quis nulla vel. Feugiat magna aliquam quis cursus massa accumsan ultrices. Donec nulla faucibus pellentesque tristique.",
  },
];

const Support = () => {
  const [open, setOpen] = useState(false);


  const [current, setCurrent] = useState();

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await getAllSupport();
      console.log(data);
      setData(data.data);
    } catch(error){
      toast.error(error ? error : "Something went wrong", "bottom-right");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <div className="w-auto justify-start font-bold text-xl text-[#374151] ">
          Support
        </div>
        <div
          className="flex font-normal text-sm w-fit bg-[#936CAB] ml-16 rounded-md"
          onClick={() => setOpen(true)}
        >
          <button className="whitespace-nowrap px-3 py-1 text-sm text-white font-semibold">
            Create New Ticket
          </button>
        </div>{" "}
      </div>
      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {problems.map((item, index) => (
          <div className=" py-4 px-5 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="w-auto justify-start text-sm text-[#9B75B2] px-2">
                {item.id}
              </div>
              <div className="w-auto justify-start text-sm text-[#7E7E7E] px-2">
                Ticket created on: {item.date}
              </div>
            </div>
            <p className="font-bold text-lg">{item.issue}</p>
            <p className="text-sm">{item.details}</p>
            <div className="flex justify-between items-center">
              <div className="w-auto flex justify-between text-sm text-[#9B75B2] py-2 font-bold px-2">
                <PaperClipIcon className="h-4 " />Attachments
              </div>
              <div className="w-auto justify-start text-sm text-[#9B75B2] py-2 font-bold px-2">
                Show Responses
              </div>
            </div>
          </div>
        ))}
        {/* {data &&
          data?.map((item, index) => (
            <div className=" py-4 px-7 rounded-lg shadow-[4px_4px_4px_2px_#936CAB]">
              <div className="flex space-x-2">
                <img
                  src={
                    item?.user?.avatar
                      ? item?.user?.avatar
                      : "/images/image2.png"
                  }
                  className="w-14 rounded-md"
                />
                <div className="text-black font-bold text-lg p-1 ">
                  {item?.user?.name ? item?.user?.name : "N/A"}
                </div>
                <div className="text-gray-800 rounded-md px-2 py-1 h-max border">
                  {item?.status === 2 ? "Solved" : "Unsolved"}
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="grid md:grid-cols-1">
                  <div className="grid md:grid-cols-1">
                    <div className=" text-[#938F99] text-sm pt-2">
                      Ticket Number
                    </div>
                    <div className=" text-black text-sm ">
                      {item.ticketNumber}
                    </div>
                  </div>
                  <div className=" text-[#938F99] text-sm ">Problem</div>
                  <div className=" text-black text-sm ">
                    {item.complainAbout}
                  </div>
                </div>
              </div>
              <div
                className="flex justify-end w-full py-6"
                onClick={() => {
                  setOpen1(true);
                  setCurrent(item);
                }}
              >
                <button className="bg-[#936CAB] rounded-md border text-white px-7 py-1">
                  Resolve
                </button>
              </div>
            </div>
          ))} */}
      </div>
      <SupportDialog open={open} setOpen={setOpen} current={current} />
    </div>
  );
};

export default Support;
