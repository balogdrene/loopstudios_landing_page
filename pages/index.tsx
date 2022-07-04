import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import logo from "../public/logo.svg"
import menuIcon from "../public/icon-hamburger.svg"
import interactive from "../public/mobile/image-interactive.jpg"
import facebook from "../public/icon-facebook.svg"
import twitter from "../public/icon-twitter.svg"
import pinterest from "../public/icon-pinterest.svg"
import instagram from "../public/icon-instagram.svg"
import { useState } from "react"

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid min-h-screen">
      <Head>
        <title>Loopstudios</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className="relative px-5 py-7 h-[800px] bg-[url(../public/mobile/image-hero.jpg)] md:bg-[url(../public/desktop/image-hero.jpg)] bg-no-repeat bg-cover bg-center  lg:px-36 md:py-10">
        <nav className="flex justify-between ">
          <div className="w-40">
            <Image src={logo} alt="" />
          </div>
          <ul className="hidden gap-10 text-white md:flex ">
            <li className="menu-item">About</li>
            <li className="menu-item">Careers</li>
            <li className="menu-item">Events</li>
            <li className="menu-item">Porducts</li>
            <li className="menu-item">Support</li>
          </ul>
          <div className="block cursor-pointer md:hidden">
            <Image src={menuIcon} alt="" />
          </div>
        </nav>
        <div className="absolute text-4xl text-white transform -translate-x-1/2 -translate-y-1/2 border-2 border-white md:relative md:text-7xl p-7 font-josefin top-1/2 left-1/2 ">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </div>
      </header>
      <main>
        <article className="relative p-5">
          <div>
            <Image src={interactive} alt="" />
          </div>
          <div className="p-5 text-center bg-white md:absolute md:w-96 md:right-0 md:bottom-11">
            <h1 className="my-3 text-3xl font-josefin">
              THE LEADER IN INTERACTIVE VR
            </h1>
            <p className="text-base font-alata text-darkGray">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have formed businesses through
              digital experiences that bind to their brand.
            </p>
          </div>
        </article>
        <article className="flex flex-col gap-5 p-5 ">
          <h1 className="my-3 text-3xl text-center font-josefin">
            OUR CREATIONS
          </h1>
          <div className="bg-[url('../public/mobile/image-deep-earth.jpg')] md:bg-[url('../public/desktop/image-deep-earth.jpg')] creation-box">
            <p className="creation-box-text">DEEP EARTH</p>
          </div>
          <div className="bg-[url('../public/mobile/image-night-arcade.jpg')] md:bg-[url('../public/desktop/image-night-arcade.jpg')] creation-box">
            <p className="creation-box-text">NIGHT ARCADE</p>
          </div>
          <div className="bg-[url('../public/mobile/image-soccer-team.jpg')] md:bg-[url('../public/desktop/image-soccer-team.jpg')] creation-box">
            <p className="creation-box-text">SOCCER TEAM VR</p>
          </div>
          <div className="bg-[url('../public/mobile/image-grid.jpg')] md:bg-[url('../public/desktop/image-grid.jpg')] creation-box">
            <p className="creation-box-text">THE GRID</p>
          </div>
          <div className="bg-[url('../public/mobile/image-from-above.jpg')] md:g-[url('../public/desktop/image-from-above.jpg')] creation-box">
            <p className="creation-box-text">FROM UP ABOVE VR</p>
          </div>
          <div className="bg-[url('../public/mobile/image-pocket-borealis.jpg')] md:bg-[url('../public/desktop/image-pocket-borealis.jpg')] creation-box">
            <p className="creation-box-text">POCKET BOREALIS</p>
          </div>
          <div className="bg-[url('../public/mobile/image-curiosity.jpg')] md:bg-[url('../public/desktop/image-curiosity.jpg')] creation-box">
            <p className="creation-box-text">THE CURIOSITY</p>
          </div>
          <div className="bg-[url('../public/mobile/image-fisheye.jpg')] md:bg-[url('../public/desktop/image-fisheye.jpg')] creation-box">
            <p className="creation-box-text">MAKE IT FISHEYE</p>
          </div>
          <div className="text-center">
            <button className="border-2 border-black text-josefin w-36">
              SEE ALL
            </button>
          </div>
        </article>
      </main>
      <footer className="flex flex-col items-center gap-10 p-5 text-center text-white bg-black">
        <div className="w-40">
          <Image src={logo} alt="" />
        </div>
        <ul className="flex flex-col gap-5">
          <li className="menu-item">About</li>
          <li className="menu-item">Careers</li>
          <li className="menu-item">Events</li>
          <li className="menu-item">Porducts</li>
          <li className="menu-item">Support</li>
        </ul>
        <div className="flex gap-5">
          <Image src={facebook} alt="" />
          <Image src={twitter} alt="" />
          <Image src={pinterest} alt="" />
          <Image src={instagram} alt="" />
        </div>
        <p className="text-veryDarkGray">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home
