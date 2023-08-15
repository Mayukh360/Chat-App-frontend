import { Routes,Route } from "react-router-dom";
import Authform from "./Component/Authform/Authform";
import ChatUi from "./Component/Chats/ChatUi";

function App() {
  return (
    <div >
      
      <Routes>
      <Route path="/" element={<Authform/>} />
      <Route path="/chats" element={<ChatUi/>} />
      </Routes>
    </div>
  );
}

export default App;
