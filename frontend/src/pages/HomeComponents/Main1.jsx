import ButtonMain from "./ButtonMain";

export default function Main1({head1, head2, text1, text2, text3,iconText , imgsrc ,iconsrc}) {
    const inputString = iconText || "";
    const wordArray = inputString.split(' ');
    
    return (
      <div className="flex flex-col sm:flex-row items-center bg-white rounded-3xl justify-between min-h-[80vh] py-2 mx-10 mb-10">
        <div className=" w-2/3 pl-20">
          <div className="flex items-center space-x-5 w-24 my-10 h-24">
              <img src={iconsrc} alt="" />
              <div className="">
                {iconText ? (
                wordArray.map((word, index) => (
                    <div className="font-bold text-lg" key={index}>{word}</div>
                ))
                ) : (
                <></>
                )}
          </div>
          </div>
          <div>
            <div className="font-black text-6xl tracking-normal font-medium">
              <h1>{head1}</h1>
              <h1>{head2}</h1>
            </div>
            <div className="text-2xl my-7 font-[20px]">
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
            </div>
          </div>
          <div>
            <ButtonMain/>
          </div>
        </div>
        <div className="flex w-2/5">
            <img src={imgsrc} alt="" />
        </div>
      </div>
    )
  }