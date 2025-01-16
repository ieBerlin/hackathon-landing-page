import CustomTextField from "../../components/mui/CustomTextField";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import Header from "./Header";

const LoginPage = () => {
  const isPending = false;
  const navigate = useNavigate();
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
  };
  function handleSignUpClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen flex-col">
        <section className="w-full max-w-md px-8 py-10 bg-white rounded-[41px] border border-[#F4F4F4] shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-[#047850] font-sora">
            Welcome Back! 👋
          </h2>
          <p className="text-[#00000075] mb-6 text-md text-center font-barlow">
            Please sign-in to your account and start the adventure
          </p>
          <form onSubmit={handleSubmitForm} className="space-y-6">
            <CustomTextField
              style={{
                border: "1px solid #1AB785",
              }}
              labelProps={{
                color: "#1AB785B5",
                size: "13px",
                lineHeight: "15px",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "400",
              }}
              name="text"
              placeholder="Enter your email or username"
              label="Email or Username"
            />

            <CustomTextField
              style={{
                border: "1px solid #1AB785",
              }}
              labelProps={{
                color: "#1AB785B5",
                size: "13px",
                lineHeight: "15px",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "400",
              }}
              name="password"
              placeholder="Type your password"
              label="Password"
            />
            <div className="flex justify-between items-center">
              <label className="flex items-center text-gray-600">
                <input
                  style={{
                    fontFamily: "Barlow, sans-serif",
                  }}
                  type="checkbox"
                  className="mr-2 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
                />
                Remember me
              </label>
              <button className="text-sm hover:underline text-[15px] leading-[22px] text-[#00AE77] font-medium font-barlow">
                Forget Password?
              </button>
            </div>
            <button
              style={{
                fontFamily: "Barlow, sans-serif",
                fontSize: "15px",
                lineHeight: "22px",
              }}
              type="submit"
              className={`w-full py-3 rounded-[6px] font-semibold transition duration-300 ${
                isPending ? "bg-gray-400 cursor-not-allowed" : "bg-[#00AE77E5] "
              } text-white shadow-md`}
              disabled={isPending}
            >
              {isPending ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7H4zm0 0a8 8 0 018 8v1a7 7 0 00-7-7H4z"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
            <p className="text-[#00000075] text-center font-medium font-barlow text-[15px] leading-[22px]">
              New on our platform?{" "}
              <button
                onClick={handleSignUpClick}
                className="font-medium text-[#00AE77] hover:underline"
              >
                Create an account
              </button>
            </p>
          </form>
        </section>
        <p className="font-barlow font-medium text-[14px] leading-[16.8px] text-[#0000006B] uppercase mt-6">
          TERMS & CONDITIONS | PRIVACY AND POLICY
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
