import React, { useState, useMemo, useCallback } from "react"
import Child from "./child"

const Parent = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Tanisha")

	const person = {
		fname: "Yuvika",
		lname: "Bisht",
	}
	const memoizedPerson = useMemo(() => person, [])

	const handleClick = () => {}
	const memoizedHandleClick = useCallback(handleClick, [])

	console.log("Parent UseMemo Render")

	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<button onClick={() => setName("Ganesha Ji")}>Change name</button>
			<Child
				name={name}
				person={memoizedPerson}
				handleClick={memoizedHandleClick}
			/>
		</div>
	)
}

export default Parent

// everytime the component renders, a new person object reference is
// created, and then it's passed in as props to the child component

// Reference is changed, react memo cant optimize nd hence the child
// component is also rendered

// Objects or functions being passed in a component.
// React creates a new reference for the object / function nd passes it to child component
// child component will always re-render
// therefore, we need not use react memo
