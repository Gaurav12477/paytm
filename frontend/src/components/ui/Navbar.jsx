import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ firstLetter }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      try {
        const authToken = localStorage.getItem("token");
        if (!authToken) {
          setIsAuthenticated(false);
          return;
        }

        const response = await axios.get(
          "http://13.53.205.111:8080/api/v1/user/check-auth",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error("Error checking authentication:", error);
        // Handle the error, e.g., redirect to login page or show an error message
      }
    }

    checkAuth();
  }, []);

  return (
    <div  className="shadow h-16 flex justify-between">
      <div className="font-bold text-3xl flex flex-col  justify-center h-full ml-4 ">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img
            className="w-2/3 sm:w-auto"
            src="https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/logo.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between align-middle">
        <ul className="flex justify-between items-center align-middle text-lg font-semibold space-x-8">
          <DivLi props={"Paytm for Consumer"} />
          <DivLi props={"Paytm For Business"} />
          <DivLi props={"Investor"} />
          <DivLi props={"Paytm For Business"} />
          <DivLi props={"Career"} />
        </ul>
      </div>

      <UserSignedIn isUserSignedIn={isAuthenticated} firstLetter={firstLetter} />
    </div>
  );
};

function UserSignedIn({ isUserSignedIn, firstLetter }) {
    const navigate = useNavigate();
    const handleSignInClick = () => {

        navigate('/signup');
      };
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        {isUserSignedIn ? (
          <div className="flex justify-center items-center">
            <div className="flex flex-col font-bold justify-center h-full mr-4">
              Hello
            </div>
            <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
              <div className="flex flex-col justify-center h-full text-xl">
                {firstLetter}
              </div>
            </div>
          </div>
        ) : (
          <div onClick={handleSignInClick} className="flex justify-center items-center sm:mx-8 rounded-3xl bg-lightBlue group hover:bg-indigo transition-all duration-150 hover:scale-105 cursor-pointer">
            <div  className="text-lg px-3 py-1 font-semibold text-white">Sign in</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 fill-indigo group-hover:fill-lightBlue"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DivLi({ props }) {
  return (
    <div className="flex flex-col space-y-1 cursor-pointer text-slate-900 hover:bg-slate-100 p-2 rounded-lg hidden lg:block">
      {props}
    </div>
  );
}

export default Navbar;
