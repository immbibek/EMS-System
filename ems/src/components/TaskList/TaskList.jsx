import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className=' overflow-x-auto h-[55%] flex items-center justify-start gap-5 flex-nowrap py-5 w-full  mt-10'>
      <div className= 'flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl '>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>29 Dec 2024</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>Study Data Structure</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia magnam ipsam reprehenderit, tenetur culpa labore magni maxime recusandae. Neque sequi dolor non minima maiores sunt pariatur cupiditate rem hic?</p>
      </div>

      
    </div>
  )
}

export default TaskList
