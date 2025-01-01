import React from 'react'

const CreateTask = () => {
  return (
    <div>
    <form className=' mt-5 p-4 flex flex-wrap w-full bg-[#1C1C1C] items-start   justify-between'>
        <div className='w-1/2 flex flex-col gap-5'>
          <div>
          <h3 className='mb-0.5 text-sm text-gray-300'>Task Title</h3>
          <input className='w-4/5 px-3 py-1  border-[1px] rounded-md outline-none bg-transparent '  type="text" placeholder='UI Design' />
         </div>   
         <div>
          <h3 className='mb-0.5 text-sm text-gray-300'>Date</h3>
          <input className='w-4/5 px-3 py-1  border-[1px] rounded-md outline-none bg-transparent text-zinc-50  ' type="date" />
         </div>
        
        <div>
          <h3 className='mb-0.5 text-sm text-gray-300'>Assign to</h3>
          <input className='w-4/5 px-3 py-1  border-[1px] rounded-md outline-none bg-transparent ' type="text" placeholder='Employee name' />
        </div>
        
        <div>
          <h3 className='mb-0.5 text-sm text-gray-300'>Category</h3>
          <input className='w-4/5 px-3 py-1  border-[1px] rounded-md outline-none bg-transparent ' type="text" placeholder='design dev,etc' />
        </div>
        </div>
      
        <div className='w-1/2'>
          <h3 className='mb-0.5 text-sm text-gray-300'>Description</h3>
          <textarea className='w-full h-55 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]  ' name="" id="" cols={30} rows={10}></textarea>
        </div>
         
        
        <button className='bg-green-400 ml-[50%]  relative bottom-8 w-full p-3 rounded '>Create Task</button>
    </form>
  </div>
  )
}

export default CreateTask
