const SearchBar = () => {
    return (
      <div>

     <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      height:"60px",
      marginTop:"-49%",
      marginLeft:"5%",
      width:"10%",
     }}>
      <h1>Chat</h1>
      <div style={{ display: "flex", marginTop:"20%", marginRight:"-267%",gap:"10px",position: "relative",
 }
      }>
      <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" class="bi bi-chat-right-dots" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
      </div>
    </div>
      <div style={{ padding: "20px", height:"-5px",marginTop: "-2%", marginLeft:"58px",
    }}>
        <input
          
          type="text"
          placeholder="Buscar"
          style={{
            width: "40%",
            height: "30px",
            padding: "5px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            background: "#2a3942",
            color: "#fff",
            
          }}
        />
      </div>
      </div>
    );
  };
  
  export default SearchBar;
  