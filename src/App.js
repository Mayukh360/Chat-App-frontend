import { Routes,Route } from "react-router-dom";
import Authform from "./Component/Authform/Authform";
import ChatUi from "./Component/Chats/ChatUi";
import Navbar from "./Component/Navbar/Navbar";
import AdminGroups from "./Component/Chats/AdminGroups";

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
      <Route path="/" element={<Authform/>} />
      <Route path="/chats" element={<ChatUi/>} />
      <Route path="/admingroups" element={<AdminGroups/>} />
      </Routes>
    </div>
  );
}

export default App;
