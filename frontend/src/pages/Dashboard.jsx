
import Balance from "@/components/ui/Balance";
import UserName from "@/components/ui/UserName";
import Users from "@/components/ui/Users";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";



const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState("User");

  const myURL = import.meta.env.VITE_BASE_URL;
 
  useEffect(() => {
    axios.get(`${myURL}/api/v1/account/balance`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(response => {
        setBalance(response.data.balance);
        setUserName(response.data.user)
      })
      .catch(error => {
        console.error("Error fetching balance:", error);
      });
  }, []);


  return (
    <div>
      <Navbar firstLetter={userName[0].toUpperCase()} />
      <div className="m-8">
        <UserName value={userName.toUpperCase()} />
        <Balance value={balance.toFixed(2)} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
