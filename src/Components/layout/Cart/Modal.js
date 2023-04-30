import * as ReactDOM from 'react-dom';
import "./Modal.css"
const BackDrop = props=>{
    return <div className="backdrop"></div>
}

const ModalOverlay = props =>{
    return <div className="modal">
        <div className="modal-content">{props.children}</div>
    </div>
}

const Modal = props =>{
    return <>
       {ReactDOM.createPortal(<BackDrop/>,document.getElementById("overLays"))}
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("overLays"))}   
    </>
}

export default Modal;