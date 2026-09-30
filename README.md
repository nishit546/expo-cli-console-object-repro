# Expo Minimal Reproducible Example: JavaScript Object Logging

This repository is a minimal reproducible example (MRE) created for an Expo bug report to demonstrate how JavaScript objects are represented in the Expo / React Native console.

---

## Code Overview

The app consists of a single screen in [`App.js`](./App.js) defining and logging a JavaScript object:

```javascript
const student = {
  name: "Nishit",
  age: 19,
  course: "React-Native",
};

console.log(student);
```

---

## 1. How to Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

---

## 2. How to Start the Expo Project

Start the Metro development server:

```bash
npx expo start
```

or:

```bash
npm start
```

You can then run the app by:
- Pressing `a` to open on an Android emulator or connected device.
- Pressing `i` to open on an iOS simulator.
- Pressing `w` to open on Web.
- Scanning the displayed QR code with the **Expo Go** app on your physical mobile device.

---

## 3. How to Reproduce the Issue

1. Start the project using `npx expo start`.
2. Open the app on Android, iOS (or Expo Go), or connect a debugger (`j` to open debugger).
3. Observe the logs emitted in the Metro terminal / debugger console when the screen renders.
4. Verify the printed representation of `student`.

---

## 4. Expected Console Output

The developer console or terminal should output an interactive or inspectable object structure showing all key-value pairs clearly:

```text
{
  name: 'Nishit',
  age: 19,
  course: 'React-Native'
}
```

Or in interactive debuggers, an expandable object tree:

```text
▶ {name: "Nishit", age: 19, course: "React-Native"}
```

---

## 5. Actual Console Output

In the Metro bundler terminal / certain debugger environments, logging a raw JavaScript object outputs:

```text
LOG  [object Object]
```

or an unformatted/collapsed single-line representation where nested properties cannot be inspected directly without wrapping the object in `JSON.stringify(student, null, 2)`.

---

## Environment

- **Expo SDK**: `~57.0.26`
- **React Native**: `0.86.3`
- **React**: `19.2.3`
- **Node.js**: `v24.x` (or LTS)
