import React from 'react'

const Post = () => {
    const posts = [
        {
          id: 1,
          author: {
            name: "Mark Boucher",
            avatar: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
            time: "1h",
            following: false,
          },
          content:
            "Exploring new ways to improve my FrontEnd development skills. Just finished a project in React Js...",
          image: "https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg",
        },
        {
            id: 1,
            author: {
              name: "Angelina Arms",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q9GlWCAoQHPpOiDOECuYUeXW9MQP7Ddt-Q&s",
              time: "2h",
              following: true,
            },
            content:
              "Exploring new ways to improve my FrontEnd development skills. Just finished a project in React Js...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuctnUEDPUhGt2NDxqohIblM0d_i9saT8uow&s",
          },
      ];
  return (
    <div className="flex flex-col items-center space-y-4 ">
      {posts.map((post, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-4 mb-4 max-w-[500px]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={post.author.avatar}
                alt="Author Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm">{post.author.name}</h3>
                <p className="text-xs text-gray-500">
                  {post.author.time} •{" "}
                  {post.author.following ? "Following" : "Follow"}
                </p>
              </div>
            </div>
            <button className="text-gray-500">⋮</button>
          </div>
          <p className="text-sm mt-2">{post.content}</p>
          <img src={post.image} alt="Post" className="w-full mt-2 rounded-lg" />
          <hr className='mt-5' />
          <div className="flex justify-around  pt-4 text-sm  border-t">
            <button className="text-blue-600 hover:text-blue-500">1 Like</button>
            <button className="text-gray-500 hover:text-blue-500">Comment</button>
            <button className="text-gray-500 hover:text-blue-500">Repost</button>
            <button className="text-gray-500 hover:text-blue-500">Send</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post