import Image from 'next/image'
import Navbar  from '../components/navbar'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Index() {
  return (
    <main id="home" className='bg-gradient-to-b from-blackBean to-darkPurple overflow-y-auto'>
        <Navbar/>
        <div className='container mx-auto pt-24 pb-6 w-[90%]'>
          <div className='w-full bg-neutral-500 mt-6 p-6 rounded-2xl'>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
          </div>
        </div>

    </main>
  )
}


      {/* <div className="w-1/4 h-screen">
        <div className='flex justify-center h-screen'>
          <div className='grid grid-cols-1'>
            
            <div className='mt-10 flex bg-gray-500 rounded-lg w-20 h-20'>
            </div>
            <div className='mt-10 flex bg-gray-500 rounded-lg w-20 h-20'>
            </div>
            <div className='mt-10 flex bg-gray-500 rounded-lg w-20 h-20'>
            </div>
            <div className='mt-10 flex bg-gray-500 rounded-lg w-20 h-20'>
            </div>
            <div className='mt-10 flex bg-gray-500 rounded-lg w-20 h-20'>
            </div>

          </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto bg-red-500">
      </div> */}