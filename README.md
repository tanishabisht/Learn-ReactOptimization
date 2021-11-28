# Rendering in React

- What causes the re-render?
  - Setter function from useState hook or dispatch function from useReducer hook
  - It doesnt re-render when you update the state to the same value as before
    - same value after initial render: component doesnt re-render
    - same value after re-renders: re-render the component just one more time, susequent function calls wont re-render the component

## Immutable state

- Mutating objects / arrays wont cause re-render
- You need to make a copy of the existing state, pass new state to the setter function, then the component will re-render

## Parent Child

- Parent component re-renders -> Child component re-renders
- Child component's DOM is never updated
- Child component went through the render phase but not the commit phase. Aka. `unnecessary render`
- same value after initial render: both parent and child dont re-render
- same value after re-renders: re-render the parent just one more time, susequent function calls wont re-render the parent, nd child doesnt re-render at all

## Unnecessary Renders

When parent component renders, React will recursively render all its child components
Unnecessary Renders is when the child component goes through the render phase but not the commit phase

## Causes for Re-render

- a component can re-render if it calls a setter function or a dispatch function
- a component can render if its parent component rendered

## Prevent Unnecessary Renders

- Same Element Reference
  - pass components as props ... as `component can change its state but not props` ... then react automatically provides the optimization
  - whenever there is a re-render cased by a change in the state of the parent component, React will optimize the re-render for you by knowing that the props has to be referencing the same element before and after the render.
