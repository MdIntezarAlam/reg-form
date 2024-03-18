import Image from "next/image";

export default function RegisterationSuccess() {
  return (
    <div className="h-[70vh] mx-auto  flex flex-col items-center justify-center gap-y-3 md:w-[60%] bg-white drop-shadow-md p-5 mt-10 text-sm text-center">
      <Image alt="image" src={"/images/cong.png"} width={100} height={100} />
      <h1 className="text-xl font-semibold ">
        Registration Application Submission Received!
      </h1>
      <span>
        Your registration application for the program has been received. You
        will receive the same shortly on the email that you provided on the
        application. (PLEASE NOTE: If you do not receive an email from us
        shortly, kindly check your spam or junk folders of your email).
      </span>
      <span>
        Admissions Department Business Hours: Monday to Friday (10:00 AM to 5:00
        PM EST){" "}
      </span>
      <span>Your Submission-ID: 5864378416083105205</span>
    </div>
  );
}
