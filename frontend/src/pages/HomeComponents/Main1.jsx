import ButtonMain from "./ButtonMain";

export default function Main1({head1, head2, text1, text2, text3,iconText , imgsrc ,iconsrc}) {
    const inputString = iconText || "";
    const wordArray = inputString.split(' ');
    
    return (
      <div className="flex flex-col sm:flex-row items-center bg-white rounded-3xl justify-between min-h-[40vh] sm:py-2 sm:mx-10 sm:mb-10">
        <div className=" sm:w-2/3 sm:pl-20 p-5">
          <div className="flex items-center space-x-4 sm:w-24 sm:my-10 h-24">
              <img className="h-16 sm:h-24" src={iconsrc} alt="" />
              <div className="">
                {iconText ? (
                wordArray.map((word, index) => (
                    <div className="font-bold  sm:text-lg" key={index}>{word}</div>
                ))
                ) : (
                <></>
                )}
          </div>
          </div>
          <div>
            <div className="font-black sm:text-6xl tracking-normal font-bold">
              <h1>{head1}</h1>
              <h1>{head2}</h1>
            </div>
            <div className="text-md sm:text-2xl my-7 font-[10px] sm:font-[20px]">
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
            </div>
          </div>
          <div>
            <ButtonMain/>
          </div>
        </div>
        <div className="flex w-2/5 hidden sm:block">
            <img src={imgsrc} alt="" />
        </div>
      </div>
    )
  }