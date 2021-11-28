import {
	// UseState,
	// UseReducer,
	// ObjectUseState,
	// ArrayUseState,
	// Parent,
	// GrandParent,
	// ParentOne,
	// ChildOne,
	// ParentTwo,
	// ParentIncorrectChildren,
	// ParentImpureComponent,
	// ParentPropsRef,
	ParentUseMemo,
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
			{/* <GrandParent /> */}
			{/* <ParentTwo /> */}
			{/* <ParentIncorrectChildren /> */}
			{/* <ParentImpureComponent /> */}
			{/* <ParentPropsRef /> */}
			<ParentUseMemo />
		</div>
	)
}

export default App
