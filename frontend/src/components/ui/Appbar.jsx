

const Appbar = ({firstLetter}) => {
  return (
    <div className="shadow h-16 flex justify-between">
        <div className="font-bold text-3xl flex flex-col  justify-center h-full ml-4 ">
            <div className="text-indigo-900">Pay<span className="text-blue-500">Tm</span></div>
        </div>

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

    </div>
  )
}

export default Appbar