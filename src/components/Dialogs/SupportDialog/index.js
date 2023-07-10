import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { resolveSupport } from "@/apis/support";
import { toast } from "react-toastify";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { PaperClipIcon } from "@heroicons/react/outline";

export default function SupportDialog({ open, setOpen, current }) {
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const router = useRouter();

  const saveHandler = async (id) => {
    try {
      setLoading(true);
      const response = await resolveSupport(id);
      console.log(response);
      setLoading(false);
      toast.success("Support ticket resolved successfully");
      setOpen(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-1/3 px-10 text-center transform overflow-hidden rounded-2xl bg-white p-3 align-middle shadow-xl transition-all">
                {" "}
                <div className="font-bold text-gray-800 text-left text-lg pt-3">
                  Raise your ticket
                </div>
                <div className="text-gray-800 text-left text-sm ">
                  Our team will get in touch with you in next 24hrs-48hrs
                </div>
                <div className=" py-8 px-2 rounded-lg">
                  <div className="text-[#936CAB] text-left">Complain About</div>
                  <div className="my-2">
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <textarea
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="text-[#936CAB] text-left">Description</div>
                  <div className="my-2">
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <textarea
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full h-16 rounded-md py-1.5 px-2 bg-[#3232470F] text-[#000000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <textarea
                        type="text"
                        name="price"
                        id="price"
                        placeholder=" Attachment"
                        className="block w-full rounded-md py-1.5 px-2 bg-[#3232470F] text-[#936CAB] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div onClick={() => setOpen(true)} className="py-6 w-3/4 ml-8">
                  <PrimaryButton text={"Create"} color={"bg-[#936CAB]"} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
