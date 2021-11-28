import React from "react"

const ChildOne = props => {
	const { children, name } = props
	console.log("ChildOne Incorrect Render")
	return (
		<div>
			{children} {name}
		</div>
	)
}

export default React.memo(ChildOne)
