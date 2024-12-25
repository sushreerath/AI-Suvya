import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import "./main.css";
import ContextProvider, { Context } from "../../context/Context.jsx";
import Login from "./login.jsx";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

     const [showLogin, setShowLogin] = useState(false);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
            <div className="nav">
                <p>Suvya</p>
                
                <img src={assets.user} alt="" onClick={() => setShowLogin(!showLogin)} />
            </div>
            {!showLogin && (
                <div className="main-container">
                    {!showResults ? (
                        <>
                            <div className="greet">
                                <p>
                                    <span>Hello there! Suvya here</span>
                                </p>
                                <p>How Can I Help You Today?</p>
                            </div>

						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In Kerala")
								}
							>
								<p>Suggest Some Place To Visit In Kerala </p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Brainstorm team bonding activities for our work retreat"
									)
								}
							>
								<p>Brainstorm team bonding activities for our work retreat </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How to Create a Gyroscope using Disc?")
								}
							>
								<p>Can you explain the difference between deep copy and shallow copy in programming?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Create a Script for the youtube video about coding "
									);
								}}
							>
								<p>Given two sorted arrays find the median of the combined array in O(log(min(m,n))) time complexity</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
                            Suvya may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Suvya Apps
						</p>
					</div>
				</div>
			</div>
            )}
            {showLogin && <Login />}
            {/* Ellipse background */}
            <div className="ellipse"></div>
		</div>
	);
};

export default Main;