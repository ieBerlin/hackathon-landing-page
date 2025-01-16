import Header from "./Header";
import signatureImage from "../../assets/signature.png";
import { ReactNode, useState } from "react";
import {
  DocumentIcon,
  UserIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import CustomTextField from "../../components/mui/CustomTextField";

function SignUpPage() {
  const [currentSignupStep, setCurrentSignupStep] = useState<number>(0);
  const stepIndicator: ReactNode = (
    <div className="flex flex-row items-center mb-6 justify-around">
      <div className={`flex flex-row gap-2 items-center`}>
        <DocumentIcon
          className={`w-[50px] h-[50px] p-[8px] rounded-[6px]  ${
            currentSignupStep === 0
              ? "bg-[#00BF7CE5] text-white"
              : "text-gray-700 bg-[#2F2B3D14]"
          }`}
        />
        <div>
          <h3
            className="font-medium text-[16px] text-[#2F2B3DE5]"
            style={{
              lineHeight: "22.5px",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Account
          </h3>
          <p
            className="font-medium text-[13px] text-[#2F2B3DB2]"
            style={{
              lineHeight: "20px",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Account Type
          </p>
        </div>
      </div>
      <ChevronRightIcon className="text-[#2F2B3DB2] w-[20px] h-[20px]" />
      <div className={`flex flex-row gap-2 items-center`}>
        <UserIcon
          className={`w-[50px] h-[50px] p-[8px] rounded-[6px]  ${
            currentSignupStep === 1
              ? "bg-[#00BF7CE5] text-white"
              : "text-gray-700 bg-[#2F2B3D14]"
          }`}
        />
        <div>
          <h3
            className="font-medium text-[16px] text-[#2F2B3DE5]"
            style={{
              lineHeight: "22.5px",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Profile
          </h3>
          <p
            className="font-medium text-[13px] text-[#2F2B3DB2]"
            style={{
              lineHeight: "20px",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            User Details
          </p>
        </div>
      </div>
      <ChevronRightIcon className="text-[#2F2B3DB2] w-[20px] h-[20px]" />

      <div className={`flex flex-row gap-2 items-center`}>
        <CheckCircleIcon
          className={`w-[50px] h-[50px] p-[8px] rounded-[6px]  ${
            currentSignupStep === 2
              ? "bg-[#00BF7CE5] text-white"
              : "text-gray-700 bg-[#2F2B3D14]"
          }`}
        />
        <div>
          <h3
            className="font-medium text-[16px] text-[#2F2B3DE5]"
            style={{
              lineHeight: "22.5px",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Complete
          </h3>
          <p
            className="font-medium text-[13px] text-[#2F2B3DB2]"
            style={{
              lineHeight: "20px",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Review & Submit
          </p>
        </div>
      </div>
    </div>
  );

  const handleNextStep = () => {
    setCurrentSignupStep((prevStep) => Math.min(prevStep + 1, 2)); // Moving to the next step, max is 2
  };

  const handlePrevStep = () => {
    setCurrentSignupStep((prevStep) => Math.max(prevStep - 1, 0)); // Moving to the previous step, min is 0
  };

  return (
    <div>
      <Header />
      <div className="flex items-center min-h-screen flex-row px-4 justify-around">
        <img
          src={signatureImage}
          className="w-[419px] h-[657px] rounded-[24px] object-cover filter grayscale"
          alt="Signature"
        />
        <section className="mt-6 w-full max-w-lg">
          {stepIndicator}
          <div className="mt-8">
            {/* Step Content */}
            {currentSignupStep === 0 && (
              <div>
                <h2
                  className="text-[#2F2B3DE5] text-2xl font-semibold mb-3"
                  style={{
                    fontSize: "24px",
                    lineHeight: "38px",
                    fontFamily: "Barlow, sans-serif",
                  }}
                >
                  Account Type
                </h2>
                <p
                  className="font-medium text-[#2F2B3DB2] mb-6"
                  style={{
                    fontSize: "15px",
                    lineHeight: "22px",
                    fontFamily: "Barlow, sans-serif",
                  }}
                >
                  Choose the appropriate account type
                </p>
                <div className="space-y-4 mt-6">
                  <select
                    name="accountType"
                    id="accountType"
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00AE77] focus:border-transparent"
                    value=""
                  >
                    <option value="" disabled selected>
                      Select your account type
                    </option>
                    <option value="Expert">Expert</option>
                    <option value="Entreprise">Entreprise</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Team Member">Team Member</option>
                  </select>
                </div>
              </div>
            )}
            {currentSignupStep === 1 && (
              <div>
                <h2
                  className="text-[#2F2B3DE5] font-semibold mb-4"
                  style={{
                    fontSize: "24px",
                    lineHeight: "38px",
                    fontFamily: "Barlow, sans-serif",
                  }}
                >
                  1. General Informations about the organisation
                </h2>
                <form>
                  <CustomTextField
                    style={{
                      border: "1px solid #2F2B3DB2",
                    }}
                    labelProps={{
                      color: "#2F2B3DB2",
                      size: "15px",
                      lineHeight: "22px",
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: "400",
                    }}
                    name="text"
                    placeholder="Select your account type"
                    label="Organization type"
                  />
                </form>
              </div>
            )}
            {currentSignupStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Review & Submit</h2>
                <p className="mb-4">Review your details before submission.</p>
                <button className="w-full py-2 px-4 bg-[#00AE77] text-white rounded-lg">
                  Submit
                </button>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                fontFamily: "Barlow, sans-serif",
              }}
              onClick={handlePrevStep}
              className="px-6 py-2 bg-gray-100 text-[#808390] rounded-[6px] flex flex-row items-center justify-center gap-2"
              disabled={currentSignupStep === 0}
            >
              <ArrowLeftIcon className="w-[16px] h-[16px] text-[#808390]" />
              Previous
            </button>
            <button
              onClick={handleNextStep}
              className="px-6 py-2 bg-[#00BF7CE5] text-white rounded-[6px] flex flex-row items-center justify-center gap-2"
              disabled={currentSignupStep === 2}
            >
              Next
              <ArrowRightIcon className="w-[16px] h-[16px] text-white" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignUpPage;
