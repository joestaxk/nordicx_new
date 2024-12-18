import React from "react";
import MutedText from "../ui/muted-text";
import TextInputUi from "../ui/input-ui";

export default function Exchange() {
  return (
    <div className="w-full h-full pb-3 pt-0 text-white bg-xDark">
      <div className="flex flex-wrap gap-2 justify-between items-center py-2 border-b border-gray-100/10 xsm:px-5 px-2">
        <div className="flex items-center gap-5">
          <div className="text-[16px] font-medium">Spot</div>
          <div className="flex gap-2 items-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.01709 6.55487H4.74658V8.16817H9.01709V6.55487Z"
                fill="#87909F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.74658 9.97217V11.585H7.30826V9.97217H4.74658Z"
                fill="#87909F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6544 13.6762L12.6542 2.28467H1.33008V13.4947C1.33008 14.3791 2.04707 15.0961 2.93153 15.0961H14.073C13.289 15.096 12.6544 14.4602 12.6544 13.6762ZM11.041 13.4828H2.94339V3.89797H11.0409L11.041 13.4828Z"
                fill="#87909F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1416 9.97217V14.2427C14.1416 14.7144 14.524 15.0968 14.9957 15.0968C15.4674 15.0968 15.8498 14.7144 15.8498 14.2427V9.97217H14.1416Z"
                fill="#87909F"
              />
            </svg>
            <div className="flex items-center text-[13px] gap-2">
              <span>1X-200X Futures</span>
              <span>
                <svg
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.936063 10.22C0.813169 10.0794 0.744141 9.88878 0.744141 9.69003C0.744141 9.49128 0.813169 9.30066 0.936063 9.16003L3.97231 5.69003L0.936063 2.22003C0.820143 2.07786 0.757035 1.88981 0.760035 1.69551C0.763035 1.50121 0.831908 1.31582 0.952144 1.17841C1.07238 1.041 1.23459 0.962285 1.40461 0.958857C1.57462 0.955429 1.73916 1.02755 1.86356 1.16003L5.36356 5.16003C5.48646 5.30066 5.55549 5.49128 5.55549 5.69003C5.55549 5.88878 5.48646 6.07941 5.36356 6.22003L1.86356 10.22C1.74052 10.3605 1.57372 10.4394 1.39981 10.4394C1.22591 10.4394 1.05911 10.3605 0.936063 10.22Z"
                    fill="#87909F"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="text-xBlueColor w-fit text-[12px] px-1 rounded-sm bg-[#0F1E3B]">Marker 0.000% / Taker 0.000%</div>
      </div>

      {/*  */}
      <div className="xsm:px-5 px-2">
        <div className="w-full pt-3">
          <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <div className="flex xxs:justify-between xxs:w-full items-center gap-2">
              <button className="text-[13px]">Limit</button>
              <button><MutedText>Market</MutedText></button>
              <button className="appearance-none flex items-center gap-1">
                <span><MutedText>Stop-limit</MutedText></span>
                <span>
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.1692 0.207275C7.2605 0.207481 7.34986 0.233725 7.42677 0.282928C7.50369 0.332132 7.56498 0.402253 7.60344 0.485063C7.64191 0.567873 7.65596 0.659937 7.64394 0.75045C7.63192 0.840963 7.59434 0.926171 7.53559 0.996075L4.278 4.86248C4.23294 4.91599 4.17673 4.95902 4.1133 4.98853C4.04987 5.01805 3.98075 5.03334 3.91079 5.03334C3.84084 5.03334 3.77172 5.01805 3.70829 4.98853C3.64486 4.95902 3.58865 4.91599 3.54359 4.86248L0.284395 0.996075C0.225653 0.926171 0.188069 0.840963 0.176051 0.75045C0.164033 0.659937 0.178082 0.567873 0.216547 0.485063C0.255013 0.402253 0.3163 0.332132 0.393216 0.282928C0.470133 0.233725 0.559487 0.207481 0.650795 0.207275H7.1692Z"
                      fill="#87909F"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex items-center gap-1 divide-x-2 divide-gray-100/10">
              <div className="text-xBlueColor text-[12px]">Transfer</div>
              <div className="flex items-center gap-2 pl-2">
                <MutedText className="border-b border-dotted">
                  Buy with
                </MutedText>
                <div className="text-xBlueColor w-fit text-[12px] px-1 rounded-sm bg-[#0F1E3B]">USD</div>
                <span>
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.729594 9.28998C0.589143 9.14935 0.510254 8.95873 0.510254 8.75998C0.510254 8.56123 0.589143 8.3706 0.729594 8.22998L4.19959 4.75998L0.729594 1.28998C0.597114 1.1478 0.524991 0.959757 0.528419 0.765456C0.531847 0.571155 0.610559 0.38577 0.747972 0.248357C0.885385 0.110944 1.07077 0.0322316 1.26507 0.0288034C1.45937 0.0253752 1.64742 0.0974983 1.78959 0.229978L5.78959 4.22998C5.93004 4.3706 6.00893 4.56123 6.00893 4.75998C6.00893 4.95873 5.93004 5.14935 5.78959 5.28998L1.78959 9.28998C1.64897 9.43043 1.45834 9.50932 1.25959 9.50932C1.06084 9.50932 0.870219 9.43043 0.729594 9.28998Z"
                      fill="#87909F"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* SELL EXCHANGE */}
          <div className="mt-5 xsm:flex space-y-2 xsm:space-y-0 w-full gap-3">
            <div className="xsm:w-1/2 w-full">
              <div className="">
                <div className="flex items-center mb-2 gap-2">
                  <MutedText>Available</MutedText>
                  <p className="text-[12px]">449.35</p>
                  <p className="text-[12px]">USDT</p>
                  <button className="text-[13px] flex items-center justify-center h-3 w-3 rounded-full text-black bg-xBlueColor">+</button>
                </div>

                {/* inputs */}
                <form action="">
                  <div className="space-y-3">
                    <TextInputUi
                      conversionType="USDT"
                      inputName="buy_price"
                      inputPlaceholder="price"
                    />

                    {/* Please add a range input here, we are not adding it so we can reduce the logic during implementation */}
                    <TextInputUi
                      conversionType="ETH"
                      inputName="buy_amount"
                      inputPlaceholder="amount"
                    />

                    {/* Please add a range input here, we are not adding it so we can reduce the logic during implementation */}
                    <TextInputUi
                      conversionType="USDT"
                      inputName="buy_total"
                      inputPlaceholder="total"
                    />

                    <div className="flex gap-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className='
                            appearance-none
                            h-4 
                            w-4 
                            border 
                            border-gray-100/50
                            rounded-sm
                           checked:accent-xGreenColor checked:appearance-auto'

                          name="buy_tp"
                          id="buy_tp"
                        />
                        <label htmlFor="buy_tp" className="border-b border-dotted text-white text-[12px]">
                          TP
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className='
                            appearance-none
                            h-4 
                            w-4 
                            border 
                            border-gray-100/50
                            rounded-sm
                           checked:accent-xRedColor checked:appearance-auto'

                          name="buy_sl"
                          id="buy_sl"
                        />
                        <label htmlFor="buy_sl" className="border-b border-dotted text-white text-[12px]">
                          SL
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="w-full py-2 text-[14px] rounded-sm appearance-none bg-xGreenColor text-white">Buy Eth</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="xsm:w-1/2 w-full">
              <div className="">
                <div className="flex items-center mb-2 gap-2">
                  <MutedText>Available</MutedText>
                  <p className="text-[12px]">0</p>
                  <p className="text-[12px]">ETH</p>
                  <button className="text-[13px] flex items-center justify-center h-3 w-3 rounded-full text-black bg-xBlueColor">+</button>
                </div>

                {/* inputs */}
                <form action="">
                  <div className="space-y-3">


                    <TextInputUi
                      conversionType="USDT"
                      inputName="sell_price"
                      inputPlaceholder="price"
                    />

                    {/* Please add a range input here, we are not adding it so we can reduce the logic during implementation */}
                    <TextInputUi
                      conversionType="ETH"
                      inputName="sell_amount"
                      inputPlaceholder="amount"
                    />

                    {/* Please add a range input here, we are not adding it so we can reduce the logic during implementation */}
                    <TextInputUi
                      conversionType="USDT"
                      inputName="buy_total"
                      inputPlaceholder="total"
                    />

                    <div className="flex gap-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className='
                            appearance-none
                            h-4 
                            w-4 
                            border 
                            border-gray-100/50
                            rounded-sm
                           checked:accent-xGreenColor checked:appearance-auto'

                          name="sell_tp"
                          id="sell_tp"
                        />
                        <label htmlFor="sell_tp" className="border-b border-dotted text-white text-[12px]">
                          TP
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className='
                            appearance-none
                            h-4 
                            w-4 
                            border 
                            border-gray-100/50
                            rounded-sm
                           checked:accent-xRedColor checked:appearance-auto'

                          name="sell_sl"
                          id="sell_sl"
                        />
                        <label htmlFor="sell_sl" className="border-b border-dotted text-white text-[12px]">
                          SL
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="w-full py-2 text-[14px] rounded-sm appearance-none bg-xRedColor text-white">Sell Eth</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
