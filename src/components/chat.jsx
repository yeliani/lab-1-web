import chats from "../data/chats"

const Chat = ({ chat }) => {
    return (
      <div style={{ background:"#111B21", display: "flex", padding: "5px", paddingTop:"17px", borderBottom: "1px solid #333", cursor: "pointer", alignItems: "center",width:"50%",}}>
        <img
          src={chat.avatar}
          alt={chat.name}
          style={{ borderRadius: "50%", marginRight: "10px", width: "34px", height: "35px" }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: "bold", color: "#fff", }}>{chat.name}</div>
          <div style={{ fontSize: "0.7em", color: "#ccc" }}>{chat.message}</div>
        </div>
        <div style={{ fontSize: "0.7em", color: "#999" }}>{chat.time}</div>
      </div>
    );
  };


export default Chat