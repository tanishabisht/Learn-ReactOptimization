import React, { useState } from "react"

const initState = ["Tanisha", "Yuvika"]

const ArrayUseState = () => {
	const [persons, setPersons] = useState(initState)

	const addName = () => {
		const addPersons = [...persons, "Ganesha Ji", "Mommy", "Doodie"]
		setPersons(addPersons)
	}

	console.log("ArrayUseState Render")

	return (
		<div>
			<button onClick={addName}>Add Name</button>
			{persons.map((person, id) => (
				<div key={id}>{person}</div>
			))}
		</div>
	)
}

export default ArrayUseState
