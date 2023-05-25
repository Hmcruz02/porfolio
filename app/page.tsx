import Image from 'next/image'
import Navbar  from '../components/navbar'
import Home from '../components/home'

export default function Index() {
  return (
    <main className='bg-gradient-to-b from-blackBean to-darkPurple min-h-screen overflow-y-auto'>
        <Navbar/>
        <div className='container mx-auto pt-24 w-[90%]'>
          <div className='w-full bg-neutral-500 mt-6 p-6 rounded-2xl'>
            <Home/>
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