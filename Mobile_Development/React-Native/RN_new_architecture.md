# React Native New Architecture

There are a few important improvements that are being made in relation to React's core which will have direct impact on React Native: Fabric, TurboModules, and CodeGen.

## Fabric 

[Fabric](https://github.com/react-native-community/discussions-and-proposals/issues/4) is the new UI layer for React Native. It's an ongoing re-architecture of React Native, intending to make the framework more robust and intuitive. Here are some of its properties:

- **Asynchronous Rendering:** It makes gesture handling and animations smoother.
- **Simplified Bridge:** Concept of "bridge" is simplified, reducing JS to Native calls significantly.
- **Better Compatibility with existing native UI controls**

## TurboModules

[TurboModules](https://github.com/react-native-community/discussions-and-proposals/issues/40) is another re-architecture in React Native that allows JavaScript to interact with native code more efficiently by enabling JS to directly access native functionalities.

## CodeGen

[CodeGen](https://github.com/facebook/react-native/commit/77c7655c4e58f90214c1a26773dca441d56ff8e1) is a tool for generating code, which is part of the efforts to reduce the gap between JavaScript and native code.

## React Phases: Render, Commit and Mount

During the lifecycle of a React Component, there are three important phases:

- **Render Phase:** It's also called 'diffing stage'. During this phase, React calls the render method and then compares the result with the previous render result.
- **Commit Phase:** During this phase, React applies any changes. (For example, updating the DOM.)
- **Mount Phase:** When a component is ready to be added to the UI, the method componentDidMount()