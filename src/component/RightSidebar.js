import React from 'react'

const RightSideBar = () => {
    const recommendations = [
        {
          id: 1,
          name: "Jimmy Anderson",
          role: "Top Voice in Manufacturing, Logistics & Supply Chain",
          image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        },
        {
          id: 2,
          name: "Michael Jordan",
          role: "Top Voice in Manufacturing, Logistics & Supply Chain",
          image: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
        },
        {
          id: 3,
          name: "Amine BOUDER",
          role: "Top Voice in Manufacturing, Logistics & Supply Chain",
          image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ];
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 ">
    <div className="max-w-[350px] max-w-sm bg-white rounded-lg shadow-lg p-5  ">
      <h3 className="text-lg font-semibold mb-3">Add to your feed</h3>

      {recommendations.map((recommend) => (
        <div
          key={recommend.id}
          className="flex items-start justify-between max-w-[300px] p-2 hover:bg-gray-50 rounded-lg transition duration-150 "
        >
          <div className="flex items-start space-x-3">
            <img
              src={recommend.image}
              alt={recommend.name}
              className="w-[50px] h-[50px] rounded-full mr-6 mt-1"
            />
          </div>
          <div>
            <div>
              <h4 className="text-sm font-semibold overflow-hidden text-ellipsis w-full line-clamp-1">
                {recommend.name}
              </h4>
              <p className="text-xs text-gray-500 overflow-hidden text-ellipsis w-full line-clamp-2">
                {recommend.role}
              </p>
            </div>
            <button className="mt-3 px-4 py-1 border rounded-full text-sm font-semibold  hover:bg-blue-100 transition duration-150 ">
              + Follow
            </button>
          </div>
        </div>
      ))}

      <button className="text-sm text-gray-600 hover:underline mt-2 w-full text-left hover:text-blue-600">
        View all recommendations →
      </button>
    </div>
  </div>
  )
}

export default RightSideBar