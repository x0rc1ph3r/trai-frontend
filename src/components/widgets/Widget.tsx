import React, { useState, useEffect } from "react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { Transaction } from "@solana/web3.js"
import { Buffer } from "buffer"
import { connection, host } from '../../utils/constants'
import EthIcon from "../../assets/solana.png"
import TokenIcon from "../../assets/aitrans.png"
import Web3Payments from "../../assets/web3payments.svg"

const Widget = () => {
  const [activeTab, setActiveTab] = useState("eth")

  const rate = 0.0001
  const [inputAmount, setInputAmount] = useState("")

  const { publicKey, sendTransaction, connected, disconnect } = useWallet()

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const target = new Date("2024-12-03T05:30:00")

      // @ts-expect-error subtracting dates
      const difference = target - now

      if (difference <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTime({ days, hours, minutes, seconds })
    }

    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCopyAddress = async () => {
    navigator.clipboard.writeText("F9ax9qQrFxcdy2sPsc3yVhf9XdNsTdf1zDQrVh2HDedW")
  }

  const handleBuy = async () => {
    try {
      const response = await fetch(`${host}/api/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyerPubkey: publicKey,
          // @ts-expect-error parseFloat() will return NaN, which causes problems
          tokens: inputAmount / rate,
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      const { base64Transaction, minContextSlot, blockhash, lastValidBlockHeight } = data
      const decodedTx = Buffer.from(base64Transaction, "base64")
      const transaction = Transaction.from(decodedTx)

      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      })
      console.log("info", "Transaction sent:", signature)

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      })
      console.log("success", "Transaction successful!", signature)
    } catch (error) {
      console.log("error", error)
    }
  }

  const [USDPrice, setUSDprice] = useState("1")
  const getCoinUSDprice = (coinId = "USD") => {
    if (coinId == "USD") {
      setUSDprice("1")
    } else {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-fn1QNCfAnMAB4yccJY3J5raa",
        },
      }

      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`, options)
        .then((response) => response.json())
        .then((data) => {
          setUSDprice(data[coinId.toLowerCase()]["usd"])
        })
        .catch((err) => console.error(err))
    }
  }

  useEffect(() => {
    getCoinUSDprice("solana")
  }, [USDPrice]) // Added USDPrice to the dependency array

  function formatLargeNumber(number: number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k"
    }
    return number.toFixed(2)
  }

  return (
    <div className="relative w-full max-w-[400px] z-[1] drop-shadow-[0_10px_6px_rgba(0,0,0,0.31)] bg-gray-900 rounded-xl border-2 border-teal-500">
      <div className="p-5">
        <p className="text-center text-teal-400 font-gs-eb text-xl mb-4">Buy $TRAI Presale</p>

        <div className="w-full mx-auto">
          <div className="text-teal-500 flex items-center justify-between w-full counter bg-gray-800 rounded-t-[15px]">
            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-teal-300 text-sm font-semibold leading-[30px] font-gs-sb">Days</div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.days < 10 ? `0${time.days}` : time.days}
              </div>
            </div>

            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-teal-300 text-sm font-semibold leading-[30px] font-gs-sb">Hours</div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.hours < 10 ? `0${time.hours}` : time.hours}
              </div>
            </div>

            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-teal-300 text-sm font-semibold leading-[30px] font-gs-sb">Minutes</div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
              </div>
            </div>

            <div className="min-w-[70px] py-[7px] px-[10px] text-center flex items-center justify-center flex-col">
              <div className="text-teal-300 text-sm font-semibold leading-[30px] font-gs-sb">Seconds</div>
              <div className="text-[28px] font-semibold leading-[1] font-gs-sb">
                {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
              </div>
            </div>
          </div>

          <p className="bg-teal-600 text-white rounded-b-[15px] text-[11px] tracking-[1px] text-center py-[2px] uppercase font-gs-sb">
            Presale ends in
          </p>
        </div>

        <div className="mt-3 w-full mx-auto">
          <p className="text-teal-400 relative tracking-[1.5px] text-sm text-center mb-2 font-gs-m before:content-[''] before:w-[20%] before:h-[1px] before:bg-gray-700 before:absolute before:left-0 before:top-1/2 after:content-[''] after:w-[20%] after:h-[1px] after:bg-gray-700 after:absolute after:right-0 after:top-1/2">
            1 $TRAI = {rate} SOL
          </p>

          <div className="flex justify-between items-center gap-2">
            <button
              onClick={() => setActiveTab("eth")}
              className={`w-full min-h-10 py-[9px] text-white rounded-[30px] text-[23px] font-semibold font-gs-sb flex items-center justify-center gap-2 uppercase border-2 ${
                activeTab === "eth"
                  ? "border-teal-500 bg-gray-800"
                  : "border-transparent hover:border-teal-500 bg-gray-700 hover:bg-gray-800"
              } transition-all duration-200`}
            >
              <div className="w-[30px] h-[30px]">
                <img
                  src={EthIcon || "/placeholder.svg"}
                  alt="Eth Icon"
                  height={30}
                  width={30}
                  className="w-auto block h-[30px]"
                />
              </div>
              <span className="leading-[1] pt-[3px]">SOL</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-6 md:gap-4">
            <div>
              {activeTab === "eth" && (
                <div>
                  <div className="text-teal-300 mb-1 flex items-center justify-between">
                    <label className="tracking-[1] text-[13px] block font-gs-m">
                      {"SOL"} you pay ($
                      {/* @ts-expect-error parseFloat() will return NaN, which causes problems */}
                      {formatLargeNumber(inputAmount * USDPrice)}):
                    </label>
                  </div>

                  <div className="relative min-h-11 flex justify-between items-center gap-1 rounded-[30px] px-[15px] border-2 border-teal-500">
                    <input
                      type="number"
                      placeholder="0"
                      className="text-white h-full flex-1 py-[2px] text-base font-gs bg-transparent border-none leading-[1] outline-none truncate w-full"
                      min={0}
                      value={inputAmount}
                      onChange={(e) => setInputAmount(e.target.value)}
                    />
                    <div className="">
                      <img
                        src={EthIcon || "/placeholder.svg"}
                        alt="SOL Icon"
                        width={28}
                        height={28}
                        className="w-[28px] h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="text-teal-300 mb-1 flex items-center justify-between">
                <label className="tracking-[1] text-[13px] block font-gs-m">$TRAI You receive</label>
              </div>

              <div className="relative min-h-11 flex justify-between items-center gap-1 rounded-[30px] px-[15px] border-2 border-teal-500">
                <div className="h-full flex-1 py-[2px] text-base font-gs text-white bg-transparent border-none leading-[1] outline-none truncate w-full">
                  {inputAmount != "" ? Number.parseFloat(inputAmount) / rate : "0"}
                </div>
                <div className="">
                  <img
                    src={TokenIcon || "/placeholder.svg"}
                    alt="Token Icon"
                    width={28}
                    height={28}
                    className="rounded-full border-2 border-teal-500 shadow-none w-[28px] h-[28px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px] w-full">
            {connected ? (
              <button
                onClick={() => handleBuy()}
                className="border-2 border-teal-500 hover:border-teal-400 hover:bg-teal-700 hover:text-white transition-all duration-200 mt-[10px] bg-teal-600 relative w-full h-[40px] rounded-[1000px] flex items-center justify-center px-[20px]"
              >
                <p className="font-MavenPro font-[500]">Buy $TRAI</p>
              </button>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <WalletMultiButton />
              </div>
            )}

            {connected && (
              <button
                onClick={() => disconnect()}
                className="border-2 border-red-500 hover:border-red-400 hover:bg-red-700 hover:text-white transition-all duration-200 mt-[10px] bg-red-600 relative w-full h-[40px] rounded-[1000px] flex items-center justify-center px-[20px]"
              >
                <p className="font-MavenPro font-[500]">Disconnect Wallet</p>
              </button>
            )}
          </div>

          <div>
            <div className="text-teal-300 text-[17px] font-gs-sb text-center w-full mt-4 mx-auto">
              Trouble connecting? You can also send SOL to this wallet:
            </div>
            <button
              onClick={handleCopyAddress}
              className="text-teal-400 underline hover:text-teal-300 text-[17px] font-gs-sb text-center w-full mt-4 mx-auto"
            >
              F9ax9qQrFx.....QrVh2HDedW
            </button>
            <div className="text-sm text-center mt-4 flex items-center justify-center">
              <p className="text-teal-300">Powered by</p>
              <div className="h-4 ml-2">
                <img src={Web3Payments || "/placeholder.svg"} alt="Web3Payments" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget