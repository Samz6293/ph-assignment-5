# Dev Stack

A platform to explore different tech stacks to help developers choose stacks for their next project.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- React Icons
- React Toastify

## Features

1. **Responsive design** across multiple breakpoints.
2. **Dynamic add, remove, and remove-all** feature.
3. **Type safety** ensured with TSX and a `types.ts` file.

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is known as JavaScript XML. It helps us write HTML-like markup along with JavaScript.

**2. What is the difference between props and state?**
Properties, shortened to props, are the parameters we send to any component and can only be sent from parent to child. State is used to track dynamic data inside a component locally.

**3. What does the `useState` hook do, and where did you use it in this project?**
It helps update dynamic data. Used in the "Your Stack" section.

![image alt](https://github.com/Samz6293/ph-assignment-5/blob/dfff81a6e76bd3ab165ab5a2f2b28d8c0ef3af44/readme-assets/useState.png)

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
Prototype: `useEffect(callback, [dependencies])`. An empty array in the second argument means the function is called once, on mount. I did not use it in my project — I used the `use` method instead.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React needs a unique identifier for each item rendered through `.map()`. This helps React update these elements later. In our code, we used the `id` to identify if a certain technology is present in the "Your Stack" section.

**6. What is conditional rendering? Show one place you used it.**
Rendering something based on a condition. Used in the selected stack, depending on whether it is empty, contains one technology, or contains multiple technologies.

![image alt](https://github.com/Samz6293/ph-assignment-5/blob/dfff81a6e76bd3ab165ab5a2f2b28d8c0ef3af44/readme-assets/conditional-rendering.png)

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
We pass data through props from parent to children only. The other way around is not possible in React in general — to do that, we need to implement the lifting-state-up method. In my project, I did this for adding and removing technologies from the stack.

![image alt](https://github.com/Samz6293/ph-assignment-5/blob/dfff81a6e76bd3ab165ab5a2f2b28d8c0ef3af44/readme-assets/props.png)