import Main1 from "./Main1";

export default function Main4() {
  return (
    <div className="text-black bg-bgMain4 h-full py-8 sm:py-[15vh] flex flex-col justify-center items-center">
      <div className="bg-bgMain4  w-[80vw] flex flex-col gap-5 sm:gap-8">
        <h1 className="pl-10 font-semibold text-xl sm:text-6xl">
          Paytm Payment Instruments.
        </h1>
        <Main1
          iconsrc={"../src/assets/wallet_main4.png"}
          iconText={"Paytm Wallet"}
          imgsrc={"../src/assets/main4_card1.webp"}
          head1={"The Fastest Way to"}
          head2={"Pay In-store & Online."}
          text1={"Load up your Paytm Wallet for free and make payments"}
          text2={"in a jiffy at over 21 million stores, websites and apps."}
        />

        <Main1
          iconsrc={"../src/assets/moneyTransIcon.png"}
          iconText={"Paytm Wallet"}
          imgsrc={"../src/assets/main4_card2.webp"}
          head1={"Pay anyone directly"}
          head2={"from your bank account"}
          text1={
            "Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or"
          }
          text2={"in a jiffy at over 21 million stores, websites and apps."}
        />
      </div>
      <div className="flex flex-col gap-16 sm:flex-row justify-center items-center my-2 w-full">
          <Main41 imgsrc={"../src/assets/main4_card3.webp"} 
          head={"Unlimited Cashback Every time"} 
          para={"Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers."} />
          <Main41 imgsrc={"../src/assets/main4_card4.webp"} 
          head={"India’s Most Sincere Credit Card"} 
          para={"Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire"} />
      </div>
    </div>
  );
}


function Main41 ({imgsrc,head,para}) {
    return (
        <div className="min-w-[35vw] justify-around bg-white rounded-3xl px-5 sm:px-16 flex flex-col gap-6 mx-8">
            <div>
                <img className="w-2/5" src="../src/assets/hdfc.png" alt="" />
            </div>
            <div className="font-bold sm:text-4xl sm:mb-5">
                {head}
            </div>
            <div>
                <div className="font-semibold sm:text-xl mb-2">
                    {para}
                </div>
                <div className="text-sm font-semibold text-slate-500">
                *Paytm Payments Bank does not provide any loan or credit card on the Paytm App.
                <span className="text-lightBlue">Know more</span>
                </div>
            </div>
            <div>
                <img src={imgsrc} alt="" />
            </div>  
        </div>
    )
}