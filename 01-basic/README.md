# 01 - React Basics

## What is JSX?
JSX is a syntax that lets us write HTML-like code inside JavaScript.
Browsers can't understand JSX directly, so Vite converts it into regular JavaScript.

## Important rules
- A component can return only **one parent element** (or use a `<>...</>` fragment)
- Use `className` instead of `class`
- Use `{ }` to write JavaScript inside JSX
- Every tag must be closed, for example `<img />`

## Example
```jsx
function Greeting() {
  const name = "Jayprakash";
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

## What I learned
- A component name always starts with a capital letter
- Any JavaScript expression can be used inside `{ }`