/** @type {import('tailwindcss').Config} */
export default{
    content: ["./**/*.{js,json,liquid}"],
    theme: {
      extend: {},
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }