import Chat from "./chat.jsx";  // Componente que renderiza un chat individual
import chatsData from "../data/chats.js"; // Array con todos los chats

const ListaChat = () => {
  return (
    <div style={{ overflowY: "auto", flex: 1,padding:"20%", marginLeft:"-15%", marginTop:"-59%",}}>
      {chatsData.map(chat => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ListaChat;
