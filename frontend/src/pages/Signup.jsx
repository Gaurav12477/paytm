import { useState } from "react"
import { Heading } from "@/components/ui/Heading"
import { InputBox } from "@/components/ui/InputBox"
import { SubHeading } from "@/components/ui/SubHeading"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import axios from "axios";
import { BottomWarning } from "@/components/ui/BottomWarning"



const Signup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign Up" />
          <SubHeading label="Enter a Information to create an account" />
          <InputBox onChange={e => {
          setFirstName(e.target.value) }} label={"First Name"} placeholder="first name" />

          <InputBox onChange={e => {
          setlastName(e.target.value) }} label={"Last Name"} placeholder="last name" />

          <InputBox onChange={e => {
          setUsername(e.target.value) }} label={"Email"} placeholder="test@gmail.com" />

          <InputBox onChange={(e) => {
            setPassword(e.target.value)
          }} type={"password"} placeholder={"********"}  label={"Password"} />

        <div className="pt-4">
        <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username",username)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>

          <BottomWarning label="Already have an account? " buttonText={"Sign in"} to={"/signin"} />
        </div>
        
      </div>
    </div>
  )
}

export default Signup