import React, { useState } from "react"
import ChildTwo from "./childTwo"

const ParentTwo = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Tanisha")

	console.log("ParentTwo Render")

	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<button onClick={() => setName("Ganesha Ji")}>Change name</button>
			<ChildTwo name={name} />
		</div>
	)
}

export default ParentTwo
