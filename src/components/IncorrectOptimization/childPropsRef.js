import React from "react"

const Child = props => {
	const { name } = props
	console.log("child Props Ref Incorrect Render")
	return <div>Hello {name}</div>
}

export default React.memo(Child)
