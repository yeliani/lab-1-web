const styles = {
  active: {
    backgroundColor: '#00a884',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  inactive: {
    backgroundColor: '#222',
    color: '#aaa',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '15px',
    cursor: 'pointer'
  }
};

const ChatFilterBar = () => {
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '8px',marginLeft:"75px",marginTop:"-1%" }}>
      <button style={styles.active}>Todos</button>
      <button style={styles.inactive}>No leídos</button>
      <button style={styles.inactive}>Favoritos</button>
      <button style={styles.inactive}>Grupos</button>
    </div>
  );
};
console.log("ChatFilterBar cargado", styles);


export default ChatFilterBar;
