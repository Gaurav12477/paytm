
const UserName = ({value}) => {
  return (
    <div className="h-full flex  items-center text-lg font-bold">
        <div className="h-full flex  items-center">
        <div className="text-lg font-bold">
            Holders Name: 
        </div>
        <div className="text-lg font-semibold px-2">
            {value} 
        </div>
    </div>
    </div>
  )
}

export default UserName