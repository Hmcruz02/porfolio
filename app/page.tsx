import Image from 'next/image'
import Navbar  from '../components/navbar'

export default function Home() {
  return (
    <main className='bg-gradient-to-b from-blackBean to-darkPurple flex h-screen'>
      <Navbar/>
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