import React from "react"

const ChildTwo = () => {
	console.log("ChildTwo Render")
	return <div>ChildTwo Component</div>
}

export default React.memo(ChildTwo)
