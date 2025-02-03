const Chat = () => {
  return (
    <div className="chat-container">
      <div className="modal-chat">
        <div className="modal-chat-body">
          <div className="chat-messages chat-area"></div>
        </div>
        <div className="modal-chat-footer">
          <input type="text" placeholder="Escribir mensaje..." id="message" />
          <button id="send-message">
            <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
