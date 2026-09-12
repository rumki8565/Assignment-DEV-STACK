# Dev Stack

Dev Stack is a website for exploring and comparing frontend, backend, database, and tooling technologies, and putting together the stack that best fits your next project.

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- Vite

## Features
   - **Build your stack**: browse 15 technologies across categories and add them to a personal "Your Stack" panel with one click.
   - **Duplicate protection**: the same technology can't be added twice — trying again shows a warning toast instead.
   - **Fully responsive design**: a sticky navbar with a mobile hamburger menu, and a card grid that adapts from 1 to 3 columns across screen sizes.

## React Q&A
i. What is JSX, and why is it used in React?
Answer: JSX is a syntax commonly used with React that lets us write HTML-like markup inside JavaScript.
JSX gets compiled in regular JavaScript and browser never actually sees it. It is used with React because it's lets us keep markup and logic together in one place instead of separate files like older frameworks.

ii. What is the difference between props and state?
Answer: Props (properties) are used to pass data from a parent component to a child component. Changes come from outside — the child can't modify its own props. State is data that belongs to a component and can change over time, and changes happen through the component's own logic. For example, in this project `TechCard` receives `technology` and `isAdded` as props from `TechnologySection`, while `App.tsx` holds the `stack` array as state since it needs to change whenever a user adds or removes a technology.  

iii. What does the `useState` hook do, and where did you use it in this project?
Answer: The useState hook allows a React component to store and update data over time, causing the UI to re-render whenever the data changes. I used it in this project in a few places: `isOpen` in `Nav.tsx` tracks whether the mobile menu is open, `stack` in `App.tsx` tracks which technologies the user has selected, and `technologies`/`isLoading` in `TechnologySection.tsx` track the fetched data and whether it's still loading.  

iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
Answer: The `useEffect` hook lets a component run code after it renders, separate from the normal render logic. We needed it here because component functions re-run on every re-render. If `setTechnologies(technologiesData)` were called directly in the component body instead of inside `useEffect`, it would run on every re-render, wasting work and risking an infinite loop, since calling a state setter itself triggers another render. Wrapping it in `useEffect` with an empty `[]` dependency array means it only runs once, right after the first render.  

v. Why does every item in a `.map()` list need a unique `key` prop?
Answer: Each item in a `.map()` list needs a unique `key` prop so React can identify which items have changed, been added, or removed. This helps React efficiently update the UI without unnecessarily re-rendering the entire list.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Answer: Conditional rendering means displaying different UI elements based on a condition. In React, you can use conditions to decide what should or shouldn't be rendered depending on the current data or state. I used a ternary in `StackSidebar` to check `stack.length === 0` — showing the "Your stack is empty" message when true, and the list of selected technologies when false.  

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: You pass data from a parent to a child using props. To send something back, the parent passes a function as a prop, and the child calls that function to send data or trigger an action in the parent. For example, `App.tsx` passes `technology`, `isAdded`, and `onAdd` down to `TechCard` as props. When the user clicks "Add to Stack," `TechCard` calls `onAdd(technology)` — the function it received — which runs `handleAdd` back in `App.tsx` and updates the `stack` state there.
