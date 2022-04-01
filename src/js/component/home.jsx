import React, { useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [todolist, setTodolist] = useState([]);
	const button = (football) => {
		setTodolist(todolist.filter((list) => list !== football));
	};
	return (
		<>
			<div>
				<input
					type="text"
					className="form-control"
					placeholder="Username"
					onChange={(e) => setItem(e.target.value)}
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
				{todolist.map((list, i) => (
					<>
						<li key={i}>{list}</li>
						<button
							onClick={() => {
								button(list);
							}}>
							delete
						</button>{" "}
					</>
				))}
			</ul>
		</>
	);
};

export default Home;
