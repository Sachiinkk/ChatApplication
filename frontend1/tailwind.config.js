// tailwind.config.js
// import daisyui from "daisyui";

// export default {
//   content: [
//     "./src/**/*.{html,js}", // Update paths based on your project structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
// };

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
