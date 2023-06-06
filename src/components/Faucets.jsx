import React from 'react'
import CryptowinImage from "../assets/cryptowin.png";
import EarnCrypto from "../assets/earncrypto.png";
import CryptoFlare from "../assets/cryptoflare.png";
// import Coinpayu from "../assets/coinpayu.png";
// import Viefaucet from "../assets/viefaucet.png";
// import Coinpayz from "../assets/coinpayz.png"
// import Coinpot from "../assets/coinpot.png";
// import Bithub from "../assets/bithub.png"
import { Bounce, Reveal, Flip } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Faucets = () => {
  return (
    <div>
 <div className="mx-9 sites flex flex-wrap gap-6 py-12 justify-center items-center">
            {/* First Card */}
            <Reveal triggerOnce={true}>
              <div className=" bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={CryptowinImage} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-white text-center ">
                    Cryptowin
                  </h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 15 minutes
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn passive income
                    </li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>
                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>
            {/* Second Card */}
            <Reveal triggerOnce={true}>
              <div className="bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={EarnCrypto} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-white text-center">
                    EarnCrypto
                  </h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 0 minutes
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn from shortlinks
                    </li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>

                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl ">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>
            {/* Third */}
            <Reveal triggerOnce={true}>
              <div className="bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={CryptoFlare} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-center text-white ">
                    Viefaucet
                  </h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 11 minutes
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn from reading articles
                    </li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>
                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        {" "}
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>
            {/* Fourth */}
            <Reveal triggerOnce={true}>
              <div className="bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={CryptoFlare} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-center text-white ">
                    Cryptoflare
                  </h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 0 minutes
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn from shortlinks
                    </li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>
                    
                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>
            {/* Fifth */}
            <Reveal triggerOnce={true}>
              <div className="bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={CryptoFlare} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-center text-white ">Cryptoflare</h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 60 minutes
                    </li>
                    <li className="list-inside flex mx-12">Earn from ads</li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn by writing articles
                    </li>
                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>

            {/* Sixth */}
            <Reveal triggerOnce={true}>
              <div className="bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={CryptoFlare} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-center text-white ">Coinpot</h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 5 minutes
                    </li>
                    <li className="list-inside flex mx-12">Earn from ads</li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn through offerwalls
                    </li>
                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>
{/* Seventh */}
<Reveal triggerOnce={true}>
              <div className="bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={CryptoFlare} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-center text-white ">Bithub</h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 5 minutes
                    </li>
                    <li className="list-inside flex mx-12">Earn from ads</li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn by writing articles
                    </li>
                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>
{/* Eigth */}
<Reveal triggerOnce={true}>
              <div className="bg-slate-950 shadow-lg pb-3 hover:scale-105">
                <div>
                  <img src={CryptoFlare} alt="" className=" w-96 h-64" />
                  <h3 className="text-2xl text-center text-white ">Bithub</h3>
                  <ul className="text-white list-none text-center">
                    <li className="list-inside flex mx-12">
                      Claim every 5 minutes
                    </li>
                    <li className="list-inside flex mx-12">Earn from ads</li>
                    <li className="list-inside flex mx-12">
                      Direct withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Faucetpay Withdrawal
                    </li>
                    <li className="list-inside flex mx-12">
                      Earn by writing articles
                    </li>
                    <div className="flex gap-3 justify-center py-4">
                      <button className="py-1 px-3 rounded bg-green-500 hover:bg-green-950">
                        Get Started
                      </button>
                      <button className="py-1 px-3 bg-blue-800 hover:bg-blue-950 rounded">
                        Payment Proof
                      </button>
                    </div>
                  </ul>
                  <p className="text-center text-3xl">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Reveal>

          </div>
        
    </div>
  )
}

export default Faucets