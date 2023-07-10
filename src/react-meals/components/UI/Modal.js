import { Fragment } from "react"
import ReactDOM from "react-dom"

const Backdrop = props => {
	return <div onClick={props.onClose} className="fixed top-0 left-0 w-screen h-screen z-20 bg-black opacity-60" />
}

const ModalOverlay = props => {
	return (
		<div className="fixed top-1/4 left-[8.33%] w-5/6 md:left-[10%] z-30 md:w-4/5 p-4 bg-white border rounded-sm shadow-lg lg:w-1/2 lg:left-1/4">
			<div>{props.children}</div>
		</div>
	
	)
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	)
}

export default Modal
