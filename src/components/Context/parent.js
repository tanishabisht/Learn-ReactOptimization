import React, { useState } from "react"
import { MemoizedChildA } from "./child"

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

const Parent = () => {
	const [count, setCount] = useState(0)

	console.log("Parent Context Render")

	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<CountProvider value={count}>
				<MemoizedChildA />
			</CountProvider>
		</div>
	)
}

export default Parent
