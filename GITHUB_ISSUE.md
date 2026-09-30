### Title
Expo DevTools console displays JavaScript objects in JSON-style format

---

### Minimal Reproducible Example
https://github.com/nishit546/expo-cli-console-object-repro

---

### Summary
When logging a normal JavaScript object using `console.log()`, the object is displayed in the development debugger console in JSON-style formatting, with double quotes around property names, rather than standard JavaScript object inspection formatting.

```javascript
const student = {
  name: "Nishit",
  age: 19,
  course: "React-Native",
};

console.log(student);
```

**The console displays:**
```text
{"age": 19, "course": "React-Native", "name": "Nishit"}
```

**Whereas a standard Node.js / JavaScript console displays:**
```text
{ name: 'Nishit', age: 19, course: 'React-Native' }
```

> **Note**: The value itself remains a valid JavaScript object in runtime and functions correctly (e.g., `typeof student === "object"` evaluates to true and its properties are accessible normally). The issue is strictly about the console's visual representation and formatting of JavaScript objects in the developer console.

---

### Steps to Reproduce
1. Clone the minimal reproduction repository: `https://github.com/nishit546/expo-cli-console-object-repro`
2. Run `npm install` and start the app with `npx expo start`.
3. Open the development debugger/console (press `j` to open debugger or view terminal logs).
4. Run the app on an Android device or emulator.
5. Notice the output produced by `console.log(student)`.

---

### Expected Behavior
The object should be displayed using standard JavaScript object inspection representation (unquoted keys or an expandable object inspector tree), consistent with JavaScript runtime developer expectations:
```text
{ name: 'Nishit', age: 19, course: 'React-Native' }
```

---

### Actual Behavior
The object is displayed in JSON-style formatting with double quotes around property names:
```text
{"age": 19, "course": "React-Native", "name": "Nishit"}
```

---

### Screenshot
![Console Output](https://raw.githubusercontent.com/nishit546/expo-cli-console-object-repro/main/assets/console-output.png)

---

### Environment
- **Expo SDK**: 57.0.26
- **Expo CLI**: 57.0.27
- **React Native**: 0.86.3
- **Platform**: Android
- **OS**: Windows 11
- **Node.js**: 24.18.0
- **Hermes**: Enabled (default)
