import React, { useState, useRef } from "react";
import ProductList from "./ProductList";
import "./App.css";
import AboutUs from "./AboutUs";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [showProductList, setShowProductList] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleGetStartedClick = () => {
		setShowProductList(true);
	};

	const handleShowPopup = () => {
		setShowModal(true);
	};

	const modalRef = useRef();

	const closeModal = (e) => {
		console.log(modalRef);
		console.log(e.target);
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	return (
		<div className="app-container">
			<div className={`landing-page ${showProductList ? "fade-out" : ""}`}>
				<div className="background-image"></div>
				<div className="content">
					<div className="landing_content">
						<h1>Welcome To Paradise Nursery</h1>
						<div className="divider"></div>
						<p>Where Green Meets Serenity</p>

						<button className="get-started-button" onClick={handleGetStartedClick}>
							Get Started
						</button>
						<button className="about-us-btn" onClick={handleShowPopup}>
							About Us
						</button>
					</div>
					<AboutUs />
				</div>
			</div>
			<div className={`product-list-container ${showProductList ? "visible" : ""}`}>
				<ProductList />
			</div>
			<div
				className={`modal-container ${showModal ? "visible" : ""}`}
				ref={modalRef}
				onClick={closeModal}>
				<div className="close-btn">
					<button onClick={() => setShowModal(false)}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>
				{showModal && <Modal />}
			</div>
		</div>
	);
}

export default App;
