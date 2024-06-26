import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    
    const myURL = import.meta.env.VITE_BASE_URL;

    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                
                <div className='p-6'>
                    <div className="flex items-center space-x-4">
                        <div className='w-12 h-12 rounded-full bg-green-500 flex items-center justify-center'>
                                <span className='text-white text-2xl font-bold'>{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className='text-2xl font-semibold'>{name}</h3>
                    </div>
                    <div className='mt-2 text-lg font-semibold'>
                        <span>Amount (in Rs)</span>
                    </div>
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />

                    <div className='mt-6 text-lg font-semibold'>
                    <button onClick={() => {
                        axios.post(`${myURL}/api/v1/account/transfer`, {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                        navigate("/dashboard")
                    }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
}


export default SendMoney;