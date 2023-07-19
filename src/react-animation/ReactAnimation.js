import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./ReactAnimation.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class ReactAnimation extends Component {
	state = {
		modalIsOpen: false,
		showBlock: false
	};

	showModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>
				<p className="mb-8 mx-auto max-w-lg">This webapp was built to learn CSS transitions, animations and also using the react-transition-group library.</p>

				<button
					className="Button"
					onClick={() =>
						this.setState(prevState => ({ showBlock: !prevState.showBlock }))}
				>
					Toggle
				</button>

				<br />

				<Transition
					in={this.state.showBlock}
					timeout={1000}
					mountOnEnter
					unmountOnExit
					onEnter={() => console.log('onEnter')}
					onEntering={() => console.log('onEntering')}
					onEntered={() => console.log('onEntered')}
					onExit={() => console.log('onExit')}
					onExiting={() => console.log('onExiting')}
					onExited={() => console.log('onExited')}
				>
					{state => (
						<div
							style={{
								backgroundColor: "red",
								width: 100,
								height: 100,
								margin: "auto",
								transition: "opacity 1s ease-out",
								opacity: state === "exiting" ? 0 : 1
							}}
						/>
					)}
				</Transition>

				<Modal show={this.state.modalIsOpen} closed={this.closeModal} />
				{this.state.modalIsOpen ? <Backdrop show /> : null}
				<button className="Button" onClick={this.showModal}>
					Open Modal
				</button>

				<h3>Animating Lists</h3>
				<List />

			</div>
		);
	}
}

export default ReactAnimation;
