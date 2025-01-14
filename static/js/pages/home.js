import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiHandshakeDuotone } from "react-icons/pi";

import bl1 from "./../media/img/bl1.jpg";
import bl2 from "./../media/img/bl2.jpg";
import bl3 from "./../media/img/bl3.jpg";
import bl4 from "./../media/img/bl4.jpg";
import bl5 from "./../media/img/bl5.jpg";
import bl6 from "./../media/img/bl6.jpg";
import bl7 from "./../media/img/bl7.jpg";
import bl8 from "./../media/img/bl8.jpg";
import bl9 from "./../media/img/bl9.jpg";
import bl10 from "./../media/img/bl10.jpg";

import blv1 from "./../media/img/blv1.MOV";
import blv2 from "./../media/img/blv2.MOV";

import x_logo from "./../media/img/x-logo.png";
import tg_logo from "./../media/img/tg-logo.png";
import dex_logo from "./../media/img/dex-logo.png";
import phantom_logo from "./../media/img/phantom_logo.png";
import sol_logo from "./../media/img/sol_logo.png";
import sui_wallet from "./../media/img/suiwallet.png";
import sui_coin from "./../media/img/suicoin.png";
import move_logo from "./../media/img/move-logo.png";
import dex_s_logo from "./../media/img/dex_s_logo.png";
import gk_logo from "./../media/img/gk_logo.png";
import cg_logo from "./../media/img/cg_logo.png";

import ton_logo from "./../media/img/tn-logo-bg.png";
import ton_keeper_logo from "./../media/img/tonkeeper_logo.png";
import { ReactComponent as BscLogo } from "./../media/img/bscscan-logo.svg";

import x_icon from "./../media/icons/x-icon.png";
import twitter_icon from "./../media/icons/twitter-icon.jpg";
import tg from "./../media/icons/tg-icon.png";

import com_icon from "./../media/icons/com_icon.png";
import ama_icon from "./../media/icons/ama_icon.png";
import inf_icon from "./../media/icons/inf_icon.png";
import earn_icon from "./../media/icons/earn_icon.png";
import check_icon from "./../media/icons/check_icon.png";
import eq_icon from "./../media/icons/eq_icon.png";
import lock_icon from "./../media/icons/lock_icon.png";
import per_icon from "./../media/icons/per_icon.png";
import copy_icon from "./../media/icons/copy.png";

import mail_icon from "./../media/icons/mail-icon.png";
import dex_icon from "./../media/icons/dex-icon.png";

import { htws } from "./../utilities/about-htw";
import { jeetcmds } from "./../utilities/jeet-cmd";

const Home = () => {
  const [htwCount, setHtwcount] = useState(0);
  const [textca, setTextca] = useState(
    "0x1e8f1b2d8ccb15f78562ab6ed05fc477d58f9cd46a355d13fbcc2f9a7ce27023::babylofi::BABYLOFI"
  );

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textca)
      .then(() => {
        alert("ca copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy ca: ", err);
      });
  };

  return (
    <div className="">
      <section id="home" className="home">
        {/* <div className="home-vid-bg">
                    <video src={blv2} autoPlay muted loop />
                </div> */}
        <div className="main-frame">
          <div className="flex row align-flex-end justify-center home-frame">
            <div className="home-text flex column align-center">
              {/* <img src={bwog_logo} className="home-text-logo-ant" alt="" data-aos="zoom-in" data-aos-duration="2000" /> */}
              <div
                className="home-head-subhead"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2>BABY LOFI</h2>
                {/* <h3 className="text-align-center">The Meme Coin Nobody Asked For, But Everyone Needs!</h3> */}
                {/* <h3>Next Generation Gaming Platform That Offers a Whole New Experience in the World of Cryptocurrency.</h3> */}
              </div>

              <div
                className="flex row justify-center align-center gap-5 copy-address-box"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src={copy_icon} alt="" onClick={copyToClipboard} />
                <p>{textca}</p>
              </div>
              <div
                className="flex row gap-15 hm-btn-cont"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <a
                  href="https://aftermath.finance/trade?from=SUI&to=0x1e8f1b2d8ccb15f78562ab6ed05fc477d58f9cd46a355d13fbcc2f9a7ce27023%3A%3Ababylofi%3A%3ABABYLOFI"
                  target="_blank"
                  className="btn-1"
                >
                  Buy Now
                </a>
                {/* <a href="" target="_blank" className='btn-sp'>
                                    Join Community
                                </a> */}
              </div>
              <div
                className="flex row gap-15 mgb-30"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <a
                  href="https://x.com/babylofitheyeti"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={x_logo} alt="" />
                </a>
                <a
                  href="https://t.me/BabyLofiOnSUI"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={tg_logo} alt="" />
                </a>
                <a
                  href="https://dexscreener.com/sui/0x31454c2d723ac203cccda8597ef458347e2b996770667a407e246673a8bb201c"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={dex_s_logo} alt="" />
                </a>
                <a
                  href="https://www.coingecko.com/en/coins/babylofi\"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={cg_logo} alt="" />
                </a>
                <a
                  href="https://www.geckoterminal.com/fr/sui-network/pools/0x31454c2d723ac203cccda8597ef458347e2b996770667a407e246673a8bb201c"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={gk_logo} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="htb" id="htb">
        <div className="htb-frame">
          <div className="htb-header">
            {/* <h2>Bart on the SUI Water Blockchain 🌊</h2> */}
            <h3>How to buy $BABYLOFI</h3>
          </div>
          <div className="grid htb-item-grid grid-column-3 row grid-column-gap-40 grid-row-gap-20 overflow-y-hidden">
            <div
              className="htb-item"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="htb-item-inner">
                <div className="flex justify-center">
                  <img src={sui_wallet} alt="" />
                </div>
                <h4>Sui Wallet</h4>
                <p>To swap $BABYLOFI on sui,</p>
                <a href="" target="_blank">
                  Click here
                </a>
              </div>
            </div>

            <div
              className="htb-item"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div className="htb-item-inner">
                <div className="flex justify-center">
                  <img className="htb-ton-logo" src={sui_coin} alt="" />
                </div>
                <h4>Buy SUI</h4>
                <p>
                  Buy SUI from your sui wallet or any centralized exchange of
                  your choice. You can also get a friend to send you SUI
                </p>
              </div>
            </div>

            <div
              className="htb-item"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="htb-item-inner">
                <div className="flex justify-center">
                  <img src={bl1} alt="" />
                </div>
                <h4>Swap $BABYLOFI on DEX</h4>
                <p>
                  Now that you have an SUI in your wallet, you can now swap SUI
                  to $BABYLOFI on{" "}
                  <a
                    href="https://aftermath.finance/trade?from=SUI&to=0x1e8f1b2d8ccb15f78562ab6ed05fc477d58f9cd46a355d13fbcc2f9a7ce27023%3A%3Ababylofi%3A%3ABABYLOFI"
                    target="_blank"
                  >
                    dex
                  </a>{" "}
                  using our Contract Address
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="main-frame">
          <div className="flex row wrap align-center">
            <div
              className="about-text"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {/* <h2>About Peki Inu</h2> */}
              <h3>ABOUT</h3>
              <p>
                My name is BABY LOFI <br />
                <br />
                Baby Lofi is the adorable and mischievous son of #Lofi the Yeti,
                the legendary YETI of the #Sui Chain.💧 <br />
                <br />
                Baby Lofi carries the same playful spirit and determination as
                his father, but with his own unique charm and charisma! <br />
                <br />
                I was frozen 🥶❄️for centuries, but I've awakened and am ready
                to build a brighter future 🧊 <br />
                <br />
                Join me and my YETI FAM. Together, we’ll shape the future 💧🌍{" "}
                <br />
                <br />
              </p>

              <a
                href="https://x.com/babylofitheyeti"
                className="about-btn flex row gap-15 justify-center align-center"
              >
                <span>Check out Tweet</span>
                <img src={twitter_icon} alt="" />
              </a>
            </div>
            <div className="about-img">
              <img src={bl3} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="tk" id="tk">
        <div className="htb-frame">
          <div
            className="cs-header"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {/* <h2>Uniting the Strengths of Floki and Shiba</h2> */}
            <h2>TOKENOMICS</h2>
          </div>
          <div className="grid grid-column-4 row grid-column-gap-50 grid-row-gap-20">
            <div
              className="tk-item"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="tk-item-inner">
                <div className="flex justify-center">
                  <div className="tk-icon-box flex justify-center align-center">
                    <img src={check_icon} className="filter" alt="" />
                  </div>
                </div>
                <h2>Name/Ticker</h2>
                <h3>$BABYLOFI</h3>
              </div>
            </div>

            <div
              className="tk-item"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="tk-item-inner">
                <div className="flex justify-center">
                  <div className="tk-icon-box flex justify-center align-center">
                    <img src={eq_icon} className="filter" alt="" />
                  </div>
                </div>
                <h2>Total Supply</h2>
                <h3>10.000.000.000</h3>
              </div>
            </div>

            <div
              className="tk-item"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="tk-item-inner">
                <div className="flex justify-center">
                  <div className="tk-icon-box flex justify-center align-center">
                    <img src={lock_icon} className="filter" alt="" />
                  </div>
                </div>
                <h2>LP Burned</h2>
                <h3>Liquidity is burned forever</h3>
              </div>
            </div>

            <div
              className="tk-item"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="tk-item-inner">
                <div className="flex justify-center">
                  <div className="tk-icon-box flex justify-center align-center">
                    <img src={per_icon} className="filter" alt="" />
                  </div>
                </div>
                <h2>Taxes</h2>
                <h3>0/0</h3>
                {/* <h3>3 Marketing and Development | 1 LP</h3> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <seciton className="memes" id="memes">
        <div className="htb-frame">
          <div className="cs-header">
            <h2>WALL OF MEMES</h2>
          </div>

          <div className="wom-cont grid grid-column-3 grid-column-gap-20 grid-row-gap-20">
            <div className="wom-item">
              <img src={bl8} alt="" />
            </div>
            <div className="wom-item">
              <video src={blv1} autoPlay muted loop />
              {/* <img src={bu3} alt="" /> */}
            </div>
            <div className="wom-item">
              {/* <video src={riz3_v} autoPlay muted loop /> */}
              <img src={bl5} alt="" />
            </div>
            <div className="wom-item">
              <img src={bl9} alt="" />
            </div>
            <div className="wom-item">
              <video src={blv2} autoPlay muted loop />
              {/* <img src={bu6} alt="" /> */}
            </div>
            <div className="wom-item">
              {/* <video src={fkv1} autoPlay muted loop /> */}
              <img src={bl7} alt="" />
            </div>
          </div>
        </div>
      </seciton>

      {/* <section className="roadmap" id="roadmap">
                <div className="main-frame">

                    <div className="roadmap-header" data-aos="fade-up" data-aos-duration="2000">
                        <h3>ROADMAP $BUIRT</h3>
                    </div>

                    <div className="roadmap-item-cont grid grid-column-3 grid-column-gap-25 grid-row-gap-10 overflow-y-hidden">
                        <div className="rd-item">
                            <h2>Phase 1: Initial Launch (1 month)</h2>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"><img src={check_icon} alt="" /></div> 
                                <p><span>Token Launch on SUI CHAIN</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"><img src={check_icon} alt="" /></div> 
                                <p><span>Website Launch & Marketing Campaigns</span></p>
                            </div>
                        </div>

                        <div className="rd-item">
                            <h2>Phase 2: Early Visibility & Liquidity Stabilization (1-3 months)</h2>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Listings on Blockchain Tracking Platforms</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Liquidity Pool Growth and Stability</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Burn Events</span></p>
                            </div>
                        </div>

                        <div className="rd-item">
                            <h2>Phase 3: Partnerships and Integration (3-6 months)</h2>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Strategic Partnerships</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Expand Trading Opportunities</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Expand Trading Opportunities</span></p>
                            </div>
                        </div>

                        <div className="rd-item">
                            <h2>Phase 4:  Long-Term Growth & Global Expansion (6-9 months)</h2>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Major Listings on Tracking Platforms</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Decentralized Governance Implementation</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Global Marketing Campaigns</span></p>
                            </div>
                        </div>

                        <div className="rd-item">
                            <h2>Phase 5: Ecosystem Strengthening & Sustainability (9+ months)</h2>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Ecosystem Expansion</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Integration with SuiChain Projects</span></p>
                            </div>
                            <div className="flex row gap-10 rd-list-box">
                                <div className="flex justify-center align-center"></div> 
                                <p><span>Continuation of Burn Events</span></p>
                            </div>
                        </div>
                    </div>

                </div>

            </section> */}

      <section className="utility" id="utility">
        <div className="htb-frame">
          <div className="cs-header">
            <h2>UTILITY BabyLOFI</h2>
          </div>

          <div className="utility-box">
            <p>
              BabyLOFI is the beloved BABY of LOFI, His mission? To protect
              animals from the devastating effects of climate change. 🧊
              rallying a community to make a real impact on the environment
              while innovating on the Sui blockchain.
            </p>
          </div>
        </div>
      </section>

      <section className="join" id="join">
        <div className="kf-frame">
          <div
            className="cs-header overflow-y-hidden"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>BabyLOFI the little Yeti!</h2>
            {/* <p>We are supported by many people. Why don’t you join them?</p> */}
          </div>

          <div className="join-box">
            <div className="flex justify-center overflow-y-hidden">
              <img src={bl1} alt="" />
            </div>
            <p>
              🚀 Join the Revolution: Welcome to the Community of SUI Degens! 🚀{" "}
              <br />
              <br />
              Baby Lofi is the adorable and mischievous son of #Lofi the Yeti,
              the legendary YETI of the #Sui Chain.💧 <br />
              <br />
              Baby Lofi carries the same playful spirit and determination as his
              father, but with his own unique charm and charisma! <br />
              <br />
              🌌 The future is here. Be part of it. 🌌
            </p>
            <h4>
              CA:
              0x1e8f1b2d8ccb15f78562ab6ed05fc477d58f9cd46a355d13fbcc2f9a7ce27023::babylofi::BABYLOFI
            </h4>
            <a
              href="https://t.me/BabyLofiOnSUI"
              target="_blank"
              className="btn-1"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="footer" id="footer">
        <div className="main-container">
          <div className="footer-box ">
            <h2>$BABYLOFI</h2>
            <div className="flex justify-center">
              <div
                className="flex row gap-15 mgb-30"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <a
                  href="https://x.com/babylofitheyeti"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={x_logo} alt="" />
                </a>
                <a
                  href="https://t.me/BabyLofiOnSUI"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={tg_logo} alt="" />
                </a>
                <a
                  href="https://dexscreener.com/sui/0x31454c2d723ac203cccda8597ef458347e2b996770667a407e246673a8bb201c"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={dex_s_logo} alt="" />
                </a>
                <a
                  href="https://www.coingecko.com/en/coins/babylofi\"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={cg_logo} alt="" />
                </a>
                <a
                  href="https://www.geckoterminal.com/fr/sui-network/pools/0x31454c2d723ac203cccda8597ef458347e2b996770667a407e246673a8bb201c"
                  target="_blank"
                  className="home-ct-icon-box flex justify-center align-center"
                >
                  <img src={gk_logo} alt="" />
                </a>
              </div>
            </div>
            <p className="copyright">
              BABY LOFI copyright 2024 - All Rights Reserved
            </p>
          </div>

          {/* <hr /> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
