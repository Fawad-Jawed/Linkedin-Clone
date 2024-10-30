import React from 'react'
import Article from '../assets/article.png'
import Event from '../assets/event.png'
import Media from '../assets/media.png'

const Hero = () => {
  return (
<div className="flex">
  <div className="bg-white mb-5 border rounded-lg p-2 w-[500px]">
    
    <div className="flex items-center text-black">
      <img src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png" className="w-12 rounded-full" alt="" />
      <input
        type="text"
        placeholder="Start a post, try writing with AI"
        className="border rounded-full px-4 py-2 ml-2 flex-1 "
      />
    </div>

    <div className="flex justify-around mt-2 text-gray-500 font-semibold">
      <div className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg">
        <img src={Media} className="w-6" alt="Media" />
        <span>Media</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg">
        <img src={Event} className="w-6" alt="Event" />
        <span>Event</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg">
        <img src={Article} className="w-6" alt="Article" />
        <span>Article</span>
      </div>
    </div>
  </div>
</div>


  )
}

export default Hero