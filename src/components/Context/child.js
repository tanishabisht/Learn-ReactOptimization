import React, { useContext } from "react"
import { CountContext } from "./parent"

const ChildA = () => {
	console.log("Child A Context Render")
	return (
		<>
			<div>Child A</div>
			<ChildB />
		</>
	)
}
export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
	console.log("Child B Context Render")
	return (
		<>
			<div>Child B</div>
			<ChildC />
		</>
	)
}

export const ChildC = () => {
	const count = useContext(CountContext)
	console.log("Child C Context Render")
	return <div>Child C count = {count}</div>
}
