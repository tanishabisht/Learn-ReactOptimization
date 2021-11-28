import React, { useState } from "react"
import Child from "./childImpureComponent"

const ParentOne = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Tanisha")

	console.log("Parent Impure Component Render")

	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<button onClick={() => setName("Ganesha Ji")}>Change name</button>
			<Child name={name} />
		</div>
	)
}

export default ParentOne
