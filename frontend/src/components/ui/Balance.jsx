

const Balance = ({value}) => {

  return (
    <div className="h-full flex  items-center">
        <div className="text-lg font-bold">
            Your Balance: 
        </div>
        <div className="text-lg font-semibold px-2">
            Rs. {value} 
        </div>
    </div>
  )
}

export default Balance