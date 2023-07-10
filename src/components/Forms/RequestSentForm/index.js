import React from 'react';


const RequestSentForm = () => {
  return (
    <div className="w-full p-10 w-full max-w-sm text-center transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
      <div className="mt-2">
        <img
          src={"/images/Check 1.png"}
          className="w-16 rounded-md ml-32"
        />
        <div
          as="h3"
          className="text-lg text-center font-semibold leading-6 text-gray-900 p-5"
        >
          Request sent successful!
        </div>
        <p className="text-xs text-gray-500 mb-5 pb-7 px-9">
          Our Admin will check and confirm about your profile within 2-3
          business day.
        </p>
      </div>
    </div>
  );
}

export default RequestSentForm