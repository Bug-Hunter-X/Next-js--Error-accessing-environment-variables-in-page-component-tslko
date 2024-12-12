```javascript
// pages/aboutSolution.js

export default function About() {
  // Check if the environment variable is defined before accessing it
  const myVariable = process.env.MY_VARIABLE || 'Default Value';

  console.log(myVariable); // Use default value if not defined

  return (
    <div>
      <h1>About Page</h1>
      <p>My Variable: {myVariable}</p>
    </div>
  );
}
```