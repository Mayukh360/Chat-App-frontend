import { Routes,Route } from "react-router-dom";
import Authform from "./Component/Authform/Authform";
import ChatUi from "./Component/Chats/ChatUi";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
      <Route path="/" element={<Authform/>} />
      <Route path="/chats" element={<ChatUi/>} />
      </Routes>
    </div>
  );
}

export default App;
