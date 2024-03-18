"use client";
import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IoCloudUpload } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const NextButtonHandler = () => {
    if (page < 2) {
      setPage(page + 1);
    } else {
      router.push("/reg_success");
    }
  };

  return (
    <div className="min-h-screen bg-slate-400 p-3">
      <div className="mx-auto md:w-[60%] bg-white drop-shadow-md p-7 m-2 flex flex-col gap-y-5">
        {page === 1 && <RegisrationFormField />}
        {page === 2 && <RegisrationProgram />}
        <hr />

        <div className="flex items-end justify-end">
          <button
            onClick={NextButtonHandler}
            className="text-sm font-semibold rounded-md bg-[#2E69FF] text-white px-8 py-2"
          >
            {page < 2 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

const RegisrationFormField = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-xl font-semibold ">REGISTRATION APPLICATION</h1>
      <hr />
      <h1 className="text-xl font-semibold text-red-600">
        1. STUDENT INFORMATION
      </h1>
      <hr />

      <label htmlFor="" className="-mb-3">
        Name
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 ">
        <div className="flex flex-col gap-y-2">
          <input
            type="text"
            className="bg-transparent border  hover:border-[#96B4FF] py-2 rounded-md"
          />
          <span className="text-xs font-normal text-[#576986]">First Name</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <input
            type="text"
            className="bg-transparent border  hover:border-[#96B4FF] py-2 rounded-md"
          />
          <span className="text-xs font-normal text-[#576986]">Last Name</span>
        </div>
      </div>
      <label htmlFor="" className="-mb-3">
        Email
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 ">
        <div className="flex flex-col gap-y-2">
          <input
            type="email"
            className="bg-transparent border  hover:border-[#96B4FF] py-2 rounded-md"
          />
          <span className="text-xs font-normal text-[#576986]">
            example@gmail.com
          </span>
        </div>
      </div>
      <label htmlFor="" className="-mb-3">
        Cell Phone Number <span className="text-red-900">*</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 ">
        <input
          type="number"
          className="bg-transparent border  hover:border-[#96B4FF] py-2 rounded-md"
        />
      </div>
      <hr />
      <h1 className="text-xl font-semibold text-red-600">
        2. UPLOAD DOCUMENTS
      </h1>
      <label htmlFor="" className="-mb-3">
        Select any one
      </label>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <input type="radio" name="" id="" />
          <span className="text-[13px]">I have a SSN</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="radio" name="" id="" />
          <span className="text-[13px]">I have a TIN</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="radio" name="" id="" />
          <span className="text-[13px]">
            I do not require the above (international students)
          </span>
        </div>
      </div>
      <label htmlFor="" className="-mb-3">
        Photo ID
      </label>
      <div className="h-fit rounded-md border-2 border-dashed border-gray-300  md:w-1/2">
        <div className="flex h-full flex-col items-center justify-center gap-y-2 py-3">
          <IoCloudUpload className=" text-3xl text-gray-300" />
          <button
            type="button"
            className="rounded-full  px-4 py-2 text-sm font-semibold text-black disabled:bg-opacity-80"
          >
            Browse & Upload Files
          </button>
          <p className="text-center text-sm text-gray-400">
            Drag and drop file here
          </p>
        </div>
      </div>
      <span className="text-xs font-normal text-[#576986]">
        Drivers License, Passport Copy, State ID, etc
      </span>
    </div>
  );
};
const RegisrationProgram = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-xl font-semibold ">PROGRAM / TUITION SELECTION</h1>
      <hr />
      <h1 className="text-xl font-semibold text-red-600">
        3. CHOOSE YOUR PROGRAM & START DATE{" "}
      </h1>
      <hr />
      <label htmlFor="" className="-mb-3">
        SELECT CATEGORY <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-[13px]">Healthcare Programs</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-[13px]">Healthcare Programs</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-[13px]">Healthcare Programs</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-[13px]">Healthcare Programs</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-[13px]">Healthcare Programs</span>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" />
          <span className="text-[13px]">Healthcare Programs</span>
        </div>
      </div>
      <label htmlFor="" className="-mb-3">
        SELECT COUNSELING & PSYCHOLOGY PROGRAM (ONLINE){" "}
      </label>

      <select className="border md:w-1/2 py-2 rounded-md px-3 outline-none">
        <option value="">Drug Use And Abuse </option>
        <option value="">Drug Use And Abuse </option>
        <option value="">Drug Use And Abuse </option>
        <option value="">Drug Use And Abuse </option>
        <option value="">Drug Use And Abuse </option>
      </select>
      <hr />
      <label htmlFor="" className="-mb-3">
        4. CHOOSE YOUR PAYMENT OPTION
      </label>
      <hr />
      <div className="flex items-center gap-x-2">
        <input type="checkbox" />
        <span className="text-[13px]">
          I agree <a href="#">terms & conditions</a>
          <span className="text-red-500">*</span>
        </span>
      </div>
      <label htmlFor="">Registering Student Signature*</label>
      <input
        className="bg-transparent border  hover:border-[#96B4FF] py-2 rounded-md md:w-1/2 h-[20vh] px-3"
        placeholder="Signature"
      />

      <div className="h-[40vh] overflow-y-auto">
        <div className="md:w-1/2 md:pl-6">
          <label htmlFor="" className="-mb-3">
            Select One<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-x-4 p-3">
            <div>
              <input type="radio" />
            </div>
            <div className="flex flex-col gap-y-1  border-b border-dashed pb-3">
              <span className="text-sm font-semibold">Pay $950 + 100</span>
              <span className="text-xs font-normal">
                Biweekly Plan $250 Down
              </span>
              <span className="text-xs font-medium">
                $250.00 for the first payment then,$215.00 for each two weeks
              </span>
            </div>
          </div>
          <div className="flex gap-x-4 p-3">
            <div>
              <input type="radio" />
            </div>
            <div className="flex flex-col gap-y-1  border-b border-dashed pb-3">
              <span className="text-sm font-semibold">Pay $950 + 100</span>
              <span className="text-xs font-normal">
                Biweekly Plan $250 Down
              </span>
              <span className="text-xs font-medium">
                $250.00 for the first payment then,$215.00 for each two weeks
              </span>
            </div>
          </div>
          <div className="flex gap-x-4 p-3">
            <div>
              <input type="radio" />
            </div>
            <div className="flex flex-col gap-y-1 pb-3">
              <span className="text-sm font-semibold">Pay $950 + 100</span>
              <span className="text-xs font-normal">
                Biweekly Plan $250 Down
              </span>
              <span className="text-xs font-medium">
                $250.00 for the first payment then,$215.00 for each two weeks
              </span>
            </div>
          </div>
          <hr />
          <div className="flex items-start justify-end text-sm font-normal gap-x-7 py-4">
            <span>Total</span>
            <span>$ 215.00</span>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
            <input
              type="text"
              placeholder="First Name"
              className="px-2 bg-transparent border  hover:border-[#96B4FF] py-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-2 bg-transparent border  hover:border-[#96B4FF] py-2 rounded-md"
            />
          </div>
          <h3 className="mt-4 font-semibold">Credit Card</h3>
          <div className="border flex flex-col items-center gap-2 mt-3 py-1">
            <div className="flex items-center w-full gap-x-2 px-3">
              <FaCreditCard />
              <input
                placeholder="Card Number"
                type="text"
                className="outline-none border-none"
              />
            </div>
            <h3 className="w-full h-1 border-t"></h3>
            <div className="flex items-center justify-between gap-x-5 px-3">
              <input
                type="number"
                placeholder="123"
                className="w-1/2 h-4 outline-none border-none"
              />
              <input
                type="number"
                placeholder="123"
                className="w-1/2 h-4 outline-none border-none"
              />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

const RegisterationSuccess = () => {
  return (
    <div className="text-center text-sm font-normal">
      <h1 className="text-xl font-semibold ">
        Registration Application Submission Received!
      </h1>
      <span>
        Your registration application for the program has been received. You
        will receive the same shortly on the email that you provided on the
        application. (PLEASE NOTE: If you do not receive an email from us
        shortly, kindly check your spam or junk folders of your email)
      </span>
      <span>
        Admissions Department Business Hours: Monday to Friday (10:00 AM to 5:00
        PM EST){" "}
      </span>
      <span>Your Submission-ID: 5864378416083105205</span>
    </div>
  );
};
