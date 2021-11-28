import React, { useState } from "react"
import ChildOne from "./childIncorrectChildren"

const ParentOne = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Tanisha")

	console.log("ParentOne Incorrect Render")

	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<button onClick={() => setName("Ganesha Ji")}>Change name</button>
			<ChildOne name={name}>
				<strong>Hello</strong>
			</ChildOne>
		</div>
	)
}

export default ParentOne
