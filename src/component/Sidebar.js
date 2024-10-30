import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="max-w-[200px] bg-white rounded-lg  shadow-md mb-2">
        <div className="flex flex-col items-start mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ2Jpxgv-6uW4MfoiSd-KvIhyBaWIFjc4lQ&s"
            alt="Profile Banner"
            className="w-full rounded-t-lg h-16 object-cover"
          />
          <img
            src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png"
            alt="Profile Pic"
            className="w-[70px] h-[70px] rounded-full  -mt-9 ml-4 center"
          />
          <div className="p-4">
            <h2 className="text-lg  font-semibold  mb-2">
              Fawad Jawed
            </h2>
            <p className="text-xs text-gray-500 mb-2">
              Student at Saylani Mass IT Training Center
            </p>
            <p className="text-xs text-gray-500">Sindh</p>
          </div>
        </div>
      </div>

      <div className="max-w-[200px] bg-white rounded-lg p-4 shadow-md mb-2">
        <div className="space-y-3">
          <div className="  text-xs cursor-pointer">Profile viewers: 50</div>
          <div className="  text-xs cursor-pointer">Post impressions: 10</div>
        </div>
      </div>

      <div className="max-w-[200px] bg-white rounded-lg p-4 shadow-md mb-2 ">
        <div className="text-gray-600 text-xs cursor-pointer hover:text-blue-600">Saved items</div>
        <div className="text-gray-600 text-xs cursor-pointer hover:text-blue-600">Groups</div>
        <div className="text-gray-600 text-xs cursor-pointer hover:text-blue-600">Events</div>
      </div>
    </div>
  )
}

export default Sidebar