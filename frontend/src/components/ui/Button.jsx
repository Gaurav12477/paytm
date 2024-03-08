

export function Button({label, onClick ,className}) {
    return <button onClick={onClick} type="button" className={`flex flex-row bg-lightBlue cursor-pointer group hover:bg-white hover:text-lightBlue hover:outline hover:text-black 
    w-fit text-white p-2 px-3 rounded-full transition-all duration-100 ease-in-out ${className}`}>{label}</button>

}