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
	// ParentUseMemo,
	ParentContext,
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
			{/* <ParentUseMemo /> */}
			<ParentContext />
		</div>
	)
}

export default App
