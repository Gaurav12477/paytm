import Navbar from "@/components/ui/Navbar";
import Main4 from "./HomeComponents/Main4";
import Main1 from "./HomeComponents/Main1";
'use strict';

export default function Home() {
  return (
    <>
        <Navbar/>
        <Main1 iconsrc={"../src/assets/paytm.avif"} imgsrc={"../src/assets/main1.avif"} head1={"India's Most-loved"} head2={"Payments App"} text1={"Recharge & pay bills, book flights & movie tickets,"} text2={"open a savings account, invest in stocks & mutual"} text3={"funds, and do a lot more."} />
        <Main2 />
        <Main3 />
        <Main4 />
        
    </>
  )
}




function Main2(){
  return ( 
    <div className="flex flex-col justify-between h-[50vh] bg-lightBlue px-20 py-10 space-y-8">
      
      <div className="text-white font-semibold text-5xl">
      Recharge & Pay Bills on Paytm.
      </div>
      <div className="flex flex-row justify-around items-center">
        <MainCard imgSrc={"../src/assets/card1.png"} heading1={"Recharge"} heading2={"Prepaid"} heading3={"Mobile"} />
        <MainCard imgSrc={"../src/assets/card2.png"} heading1={"Pay"} heading2={"Electricity"} heading3={"Bill"} />
        <MainCard imgSrc={"../src/assets/card3.png"} heading1={"Recharge"} heading2={"DTH"} heading3={"Connection"} />
        <MainCard imgSrc={"../src/assets/card4.png"} heading1={"Book"} heading2={"Gas"} heading3={"Cylinder"} />
        <MainCard imgSrc={"../src/assets/card5.png"} heading1={"Pay"} heading2={"Broadband &"} heading3={"Landline Bill"} />
        <MainCard imgSrc={"../src/assets/card6.png"} heading1={"Pay"} heading2={"Education"} heading3={"Fee"} />
        <MainCard imgSrc={"../src/assets/card7.png"} heading1={"All"} heading2={"Payment"} heading3={"Services"} />
      </div>

    </div>
  )
}

function Main3(){
  return ( 
    <div className="flex flex-col justify-between h-[50vh] bg-indigo px-20 py-10 space-y-8">
      
      <div className="text-white font-semibold text-5xl">
      Book & Buy on Paytm.
      </div>
      <div className="flex flex-row justify-around items-center">
        <MainCard imgSrc={"../src/assets/cards1.png"}  heading2={"Movie"} heading3={"Tickets"} />
        <MainCard imgSrc={"../src/assets/cards2.png"}  heading2={"Flight"} heading3={"Tickets"} />
        <MainCard imgSrc={"../src/assets/cards3.png"}  heading2={"Bus"} heading3={"Tickets"} />
        <MainCard imgSrc={"../src/assets/cards4.avif"}  heading2={"Train"} heading3={"Tickets"} />
        <MainCard imgSrc={"../src/assets/cards5.png"}  heading2={"Buy"} heading3={"Insurance"} />
        <MainCard imgSrc={"../src/assets/cards6.png"}  heading2={"International"} heading3={"Flights"} />
        <MainCard imgSrc={"../src/assets/cards7.webp"}  heading2={"Payment"} heading3={"Services"} />
      </div>

    </div>
  )
}



function MainCard({imgSrc, heading1, heading2 ,heading3}) {

  return (

    <div className=" rounded-lg hover:backdrop-grayscale-[.3] cursor-pointer w-[10vw] p-3">
      <div className="">
        <img className="h-16" src={imgSrc} alt="" />
      </div>
      <div className="text-white font-semibold text-lg my-3">
        <div>{heading1}</div>
        <div className="font-bold">
          <div>{heading2}</div>
          <div> {heading3} &gt; </div>
        </div>
      </div>
    </div>
  )

}

