import React, { useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [todolist, setTodolist] = useState([]);
	return (
		<>
			<div>
				<input
					type="text"
					className="form-control"
					placeholder="Username"
					onCharge={(e) => setItem(e.target.value)}
					value={item}
				/>
				<a
					onClick={() => {
						setTodolist([...todolist, item]);
						console.log(todolist);
					}}
					type="button"
					className="btn btn-primary"
					id="basic-addon1">
					Button
				</a>
			</div>
			<ul>
				<li>{item}</li>
			</ul>
		</>
	);
};

export default Home;
