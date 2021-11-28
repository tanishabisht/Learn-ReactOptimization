import React from "react"

const Child = props => {
	const { name } = props
	const date = new Date()
	console.log("Child Impure Component Render")
	return (
		<div>
			Hello {name}. It is currently {date.getHours()}:{date.getMinutes()}:
			{date.getSeconds()}
		</div>
	)
}

export default React.memo(Child)
