import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function SupportDialog({ open, setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };
  const router = useRouter();

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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm text-center transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                <div className="mt-2">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-semibold leading-6 text-gray-900"
                  >
                    Verification
                  </Dialog.Title>
                  <p className="text-xs text-gray-500 mb-5">
                    Please check you message for a five-digit security code and
                    enter it below.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
