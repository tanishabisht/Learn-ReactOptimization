# Learn - React Optimizations 

This is the sixth installment of a seven-part series designed to improve your React development skills. This project focuses on optimizing React application by reducing the number of re-renders. We have followed [this](https://www.youtube.com/playlist?list=PLC3y8-rFHvwg7czgqpQIBEAHn8D6l530t) youtube video for the same.


## Instructions to run the application
Follow these instructions to get the application running:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - To run the project : `npm start`


## What Triggers a Re-render?
- Using the setter function from the `useState` hook or the dispatch function from the `useReducer` hook.
- Updating the state to the same value it previously held does not trigger a re-render, except under these conditions:
  - Same value after the initial render: The component does not re-render.
  - Same value after re-renders: The component re-renders just once more; subsequent updates with the same value will not cause further re-renders.

- A component will re-render if it:
  - Executes a setter or dispatch function.
  - Has a parent component that re-rendered.
  - Uses React Context via the Context API.

## Immutable State
- Directly mutating objects or arrays will not trigger a re-render.
- To cause a re-render, you must create a copy of the current state and use this new copy as the argument to the setter function.


## Parent and Child Components
- When a parent component re-renders, its child components also re-render.
- However, if the child component's DOM has not changed, it may go through the render phase without progressing to the commit phase, known as an "unnecessary render."
- Consistent values across renders:
  - After the initial render, if the same value is used again, neither the parent nor the child re-renders.
  - After re-renders, the parent re-renders just once more with subsequent identical updates not causing re-renders; the child does not re-render at all.


## Unnecessary Renders
- When a parent component re-renders, React automatically re-renders all its child components.
- An unnecessary render occurs when a child component goes through the render phase but not the commit phase.


## Preventing Unnecessary Renders
- **Same Element Reference**:
  - Passing components as props allows React to optimize re-renders, as a component can change its state but not its props. React ensures that re-renders are optimized when the props reference the same elements before and after the render.
- **React.memo**:
  - A component wrapped in `React.memo` will only re-render if its props change.


## React Learning Series
This project is part of a comprehensive React learning series:
1. [React Application for User Listing](https://github.com/tanishabisht/Learn-ReactUsersListing)
2. [Hooks in React](https://github.com/tanishabisht/Learn-ReactHooks)
3. [State Management in React](https://github.com/tanishabisht/Learn-ReactStateManagement) 
4. [Material-UI in React](https://github.com/tanishabisht/Learn-ReactMUI) 
5. [Redux in React](https://github.com/tanishabisht/Learn-ReactRedux) 
6. [Optimizing React Apps](https://github.com/tanishabisht/Learn-ReactOptimization) (this repository)
7. [Building a Burger Builder App in React](https://github.com/tanishabisht/Learn-ReactBurgerBuilder)