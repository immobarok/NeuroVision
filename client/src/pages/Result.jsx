import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';

const Result = () => {

  const [image, setImage] = React.useState(assets.sample_img_1);
  const [isImgLoading, setIsImgLoading] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://api.generated.photos/api/v1/faces?api_key=${process.env.REACT_APP_API_KEY}&order_by=random&per_page=1&emotion=${input}`);
      const data = await res.json();
      setImage(data.faces[0].urls[4][512]);
      setIsImgLoading(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center min-h-[90vh]'>
      <div>
        <div className='relative'>
          <img src={assets.sample_img_1} alt="" className='max-w-sm rounded' />
          <span className={`absolute bottom-0 left-0 h-1
        bg-blue-600 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading ...</p>
      </div>
      {!isImgLoading &&
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' />
          <button className='px-10 py-3 sm:px-16 bg-zinc-900 rounded-full'>Generate</button>
        </div>
      }
      {isImgLoading &&
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p onClick={() => { setIsImgLoading(false) }} className='bg-transparent border border-stone-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-200 transition-all duration-100'>Generate Another</p>
          <a href={image} download className='bg-stone-900 px-10 py-3 rounded-full cursor-pointer hover:bg-stone-700 transition-all duration-300'>Download</a>
        </div>
      }
    </motion.form>
  )
}

export default Result