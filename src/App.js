import {
	// UseState,
	// UseReducer,
	// ObjectUseState,
	// ArrayUseState,
	// Parent,
	GrandParent,
	// ParentOne,
	// ChildOne,
} from "./components"

function App() {
	console.log("APP")
	return (
		<div className="App">
			{/* <UseState /> */}
			{/* <UseReducer /> */}
			{/* <ObjectUseState /> */}
			{/* <ArrayUseState /> */}
			{/* <Parent /> */}
			{/* <ParentOne>
				<ChildOne />
			</ParentOne> */}
			<GrandParent />
		</div>
	)
}

export default App
