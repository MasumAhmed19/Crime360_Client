import { Link } from 'react-router-dom'

const Slide = ({ image, text, btnText="Post a Query" }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[20rem] md:h-[40rem] rounded-lg overflow-hidden'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* <div className='flex items-center justify-center w-full h-full bg-gray-900/70'> */}
      <div className='flex items-center justify-center w-full h-full '>
        <div className='flex-row md:flex gap-5 w-full'>
            <div className='w-full pl-20 md:p-28'>
                <h1 className='text-xl md:text-4xl  uppercase font-semibold text-white '>
                    {text}
                </h1>
                <br />
                <Link
                    to='/add-query'
                    className='btn1 w-full'
                >
                    {btnText}
                </Link>
            </div>
            
            <div className='w-full'>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
