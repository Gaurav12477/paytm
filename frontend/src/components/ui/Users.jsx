import { InputBox } from "./InputBox"
import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {

    const [filter, setFilter] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

  return (
    <div className="mt-5">
        <div className="font-bold text-3xl pt-6">
            <h1>Users</h1>
        </div>
        <div className="my-2">
            <InputBox onChange={(e) => {
                setFilter(e.target.value)
            }} type={"text"}  placeholder={"Search users...."}/>
        </div>
        <div>
            {users && users.map(user => <User user={user} /> )}
        </div>

    </div>
  )
}


function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
        <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}

export default Users