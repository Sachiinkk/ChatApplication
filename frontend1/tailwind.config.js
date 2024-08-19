// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	// eslint-disable-next-line no-undef
// 	plugins: [require("daisyui")],
// };

import tailwindcss from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/**/*.{html,js}", // Update with your file paths
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui()],
};
