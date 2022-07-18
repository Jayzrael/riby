import "./style.css";
const Modal = ({ children, hideShowModal }) => {
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
