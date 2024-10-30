import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Post from './component/Post';
import RightSidebar from './component/RightSidebar';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="bg-gray-100">
    <Navbar />

    <div className="flex space-x-4 justify-center pt-5  min-h-screen ">
      <Sidebar />
      <div>
        <Hero />
        <Post />
      </div>
      <RightSidebar />
    </div>
  </div>
  );
}

export default App;
