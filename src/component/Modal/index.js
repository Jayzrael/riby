import "./style.css";
const Modal = ({ children }) => {
  return (
    <div className="modal-backdrop">
      <div className="modals">
        {children}
        {/* <button onClick={hideShowModal}>Close</button> */}
      </div>
    </div>
  );
};

export default Modal;
