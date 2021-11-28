import React, { useState } from "react"

const ParentOne = params => {
	const { children } = params
	const [count, setCount] = useState(0)

	console.log("ParentOne Render")

	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>
				Parent Count - {count}
			</button>
			{children}
		</div>
	)
}

export default ParentOne
