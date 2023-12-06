import React from 'react'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className=' text-white absolute top-[58px] bg-red-500 w-[550px] h-[200px] flex space-x-[100px] pl-3 pt-2'>
        <div className=' w-full'>
            <input placeholder='Search Anime...' type="search" className=' w-[80%]'/>
        </div>
      
    </div>
  ) : ""
}

export default Popup