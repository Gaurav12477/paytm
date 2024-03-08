import Navbar from "@/components/ui/Navbar";
import Main4 from "./HomeComponents/Main4";
import Main1 from "./HomeComponents/Main1";
'use strict';

export default function Home() {
  return (
    <>
        <Navbar/>
        <Main1 iconsrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/paytm.avif"} imgsrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/main1.avif"} head1={"India's Most-loved"} head2={"Payments App"} text1={"Recharge & pay bills, book flights & movie tickets,"} text2={"open a savings account, invest in stocks & mutual"} text3={"funds, and do a lot more."} />
        <Main2 />
        <Main3 />
        <Main4 />
        
    </>
  )
}

function Main2(){
  return ( 
    <div className="flex flex-col justify-between min-h-[30vh] bg-lightBlue py-5 px-2 sm:px-20 sm:py-10 sm:space-y-8">
      
      <div className="text-white font-semibold text-lg sm:text-5xl">
      Recharge & Pay Bills on Paytm.
      </div>
      <div className="flex flex-row justify-around items-center  overflow-scroll sm:overflow-auto">
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card1.png"} heading1={"Recharge"} heading2={"Prepaid"} heading3={"Mobile"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card2.png"} heading1={"Pay"} heading2={"Electricity"} heading3={"Bill"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card3.png"} heading1={"Recharge"} heading2={"DTH"} heading3={"Connection"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card4.png"} heading1={"Book"} heading2={"Gas"} heading3={"Cylinder"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card5.png"} heading1={"Pay"} heading2={"Broadband &"} heading3={"Landline Bill"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card6.png"} heading1={"Pay"} heading2={"Education"} heading3={"Fee"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card7.png"} heading1={"All"} heading2={"Payment"} heading3={"Services"} />
      </div>

    </div>
  )
}

function Main3(){
  return ( 
    <div className="flex flex-col justify-between min-h-[30vh] bg-indigo px-2 sm:px-20 sm:py-10 space-y-8">
      
      <div className="text-white font-semibold text-lg sm:text-5xl">
      Book & Buy on Paytm.
      </div>
      <div className="flex flex-row justify-around items-center overflow-scroll sm:overflow-auto">
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card1.png"}  heading2={"Movie"} heading3={"Tickets"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card2.png"}  heading2={"Flight"} heading3={"Tickets"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card3.png"}  heading2={"Bus"} heading3={"Tickets"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card4.png"}  heading2={"Train"} heading3={"Tickets"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card5.png"}  heading2={"Buy"} heading3={"Insurance"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card6.png"}  heading2={"International"} heading3={"Flights"} />
        <MainCard imgSrc={"https://myphotobkt.s3.eu-north-1.amazonaws.com/assets/card7.png"}  heading2={"Payment"} heading3={"Services"} />
      </div>

    </div>
  )
}



function MainCard({imgSrc, heading1, heading2 ,heading3}) {

  return (

    <div className=" rounded-lg hover:backdrop-grayscale-[.3] cursor-pointer  w-full sm:w-[10vw] p-3">
      <div className="">
        <img className="h-10 sm:h-16" src={imgSrc} alt="" />
      </div>
      <div className="text-white font-semibold sm:text-lg my-3">
        <div>{heading1}</div>
        <div className="sm:font-bold">
          <div>{heading2}</div>
          <div> {heading3} &gt; </div>
        </div>
      </div>
    </div>
  )

}

