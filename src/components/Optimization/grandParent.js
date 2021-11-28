import React, { useState } from "react"
import ChildOne from "./childOne"
import ParentOne from "./parentOne"

const GrandParent = () => {
	const [newCount, setNewCount] = useState(0)

	console.log("GrandParent Render")

	return (
		<div>
			<button onClick={() => setNewCount(nc => nc + 1)}>
				Grandparent Count - {newCount}
			</button>
			<ParentOne>
				<ChildOne />
			</ParentOne>
		</div>
	)
}

export default GrandParent
