import Chat from "./chat.jsx";
import chatsData from "../data/chats.js"; 

const ListaChat = () => {
  const elementos = [];
  chatsData.forEach(chat => {
    elementos.push(<Chat key={chat.id} chat={chat} />);
  });

  return (
    <div style={{ overflowY: "auto", flex: 1, padding: "20%", marginLeft: "-15%", marginTop: "-59%" }}>
      {elementos}
    </div>
  );
};

export default ListaChat;
