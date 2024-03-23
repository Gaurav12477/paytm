import { useState } from "react";
import { Heading } from "@/components/ui/Heading";
import { InputBox } from "@/components/ui/InputBox";
import { SubHeading } from "@/components/ui/SubHeading";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import axios from "axios";
import { BottomWarning } from "@/components/ui/BottomWarning";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign In" />
          <SubHeading label="Enter your Credentials to access your account" />

          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Email"}
            placeholder="test@gmail.com"
          />

          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={"password"}
            placeholder={"********"}
            label={"Password"}
          />

          <div className="pt-4">
            <Button
              onClick={async () => {
                try {
                  const response = await axios.post("http://13.53.205.111:8080/api/v1/user/signin", {
                    username,
                    password,
                  });
                  localStorage.setItem("token", response.data.token);
                  localStorage.setItem("username",username)
                  navigate("/dashboard");
                } catch (error) {
                  console.error("Sign In failed", error);
                  // Handle error, show a message, etc.
                }
              }}
              label={"Sign in"}
            />
          </div>

          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
