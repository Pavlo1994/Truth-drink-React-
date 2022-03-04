import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Truth or Drink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex mx-auto p-4 h-screen">
        <div className="m-auto">
          <div className="text-4xl text-header font-semibold mx-auto text-center align-middle pb-2">
            TRUTH <span className="text-xl align-middle">O R</span> DRINK
          </div>

          <div className="rounded-lg bg-[#8D889F] text-center text-white font-bold max-w-fit px-4 m-auto">
            O N L I N E
          </div>

          <br/>

          <div className="text-center font-bold max-w-fit px-4 m-auto text-[#8D889F] pb-4 pt-4">
            S E L E C T  &nbsp; M O D E:
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-white font-bold text-xl rounded-xl p-4 shadow-xl w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#00C5FF] to-[#009BFF]">
              Normal
            </div>
            <div className="text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#FFC300] to-[#FF8900]">
              Party
            </div>
          </div>

          <br/>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#FF006D] to-[#FC0023]">
              Dirty
            </div>
            <div className="text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]">
              Intimate
            </div>
          </div>

          <br/> 

          <div className="text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-black">
            M I X &nbsp; M O D E S
          </div>

        </div>
      </div>
      <footer className="bg-gray-100 text-center lg:text-left">
        <div className="text-center text-gray-700 p-4">
          © 2022 <a className="text-gray-800" href="https://aravindnatch.me/">Aravind Natchiappan</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
