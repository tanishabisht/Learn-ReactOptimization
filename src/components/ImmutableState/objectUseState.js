import React, { useState } from "react"

const initState = {
	fname: "Tanisha",
	lname: "Bisht",
}

const ObjectUseState = () => {
	const [person, setPerson] = useState(initState)

	const changeName = () => {
		const newPerson = { ...person }
		newPerson.fname = "Inu"
		newPerson.lname = "Oneecha"
		setPerson(newPerson)
	}

	console.log("ObjectUseState Render")

	return (
		<div>
			<button onClick={changeName}>
				{person.fname} {person.lname}
			</button>
		</div>
	)
}

export default ObjectUseState
