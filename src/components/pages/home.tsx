import ChatPage from "../common/chatpage";
import Sidebar from "../common/sidebar";
import TopBar from "../common/topbar";

const Home = () => (
  <div className="flex flex-row">
    <div className="h-screen bg-[#181818]">
      <Sidebar />
    </div>
    <div className="flex flex-col flex-1 overflow-hidden">
      <TopBar />
      <div className="flex flex-col justify-center h-full w-full">
        <ChatPage />
      </div>
    </div>
  </div>
);

export default Home;
