export const EXAMPLES = {
    components: {
      title: 'Components',
      description: 'In React, components are the building blocks of your application.',
      code: `
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
      `,
    },
    jsx: {
      title: 'JSX',
      description: 'JSX, or JavaScript XML, is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows you to write HTML-like code directly within your JavaScript files. This mix of HTML and JavaScript lets you build components more intuitively.',
      code: `
        const element = <h1>Hello, world!</h1>;
      `,
    },
    props: {
      title: 'Props',
      description: 'In React, props (short for “properties”) are a way of passing data from parent components to child components. They allow you to customize the appearance and behavior of a child component.',
      code: `
        function Welcome(props) {
          return <h1>Hello, {props.name}!</h1>;
        }
  
        function App() {
          return <Welcome name="Alice" />;
        }
      `,
    },
    state: {
      title: 'State',
      description: 'In React, state is a built-in object that allows components to store and manage data that can change over time. Think of it as the component\'s memory.',
      code: `
        import React, { useState } from 'react';
  
        function Counter() {
          const [count, setCount] = useState(0);
  
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
          );
        }
  
        export default Counter;
      `,
    },
  };
  