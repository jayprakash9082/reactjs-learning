# Components

## What is a component?
A component is a reusable piece of UI. In React, it is a JavaScript function that returns JSX.

## Rules
- The name must start with a capital letter (`Header`, not `header`)
- It must return JSX (one parent element or a fragment)
- Keep one component per file
- Export it with `export default` and import it where needed

## Example

**src/components/Header.jsx**

function Header() {
  return (
    <header>
      <h1>My React Learning</h1>
    </header>
  );
}

export default Header;

**src/App.jsx**
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <ProfileCard />
      <ProfileCard />
      <Footer />
      </>

  );
}

export default App;




`App.jsx` is the root component that combines all the other components.

## What I learned
- Components are the building blocks of a UI
- One component can be used many times (like `ProfileCard` above)
- Components can be nested inside other components
- Splitting the UI into small components makes code easier to read and reuse