const relativeDimentions = {
  "1/12": "8%",
  "2/12": "16%",
  "3/12": "20%",
  "4/12": "33%",
  "5/12": "41%",
  "6/12": "50%",
  "7/12": "58%",
  "8/12": "66%",
  "9/12": "75%",
  "10/12": "84%",
  "11/12": "91%",
  "12/12": "100%",
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: relativeDimentions,
      maxHeight: relativeDimentions,
      maxWidth: relativeDimentions,
      aspectRatio: {
        "4/3": "4 / 3",
      },
      animation: {
        flicker: "1s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%": { opacity: "0.27861" },
          "5%": { opacity: "0.34769" },
          "10%": { opacity: "0.23604" },
          "15%": { opacity: "0.90626" },
          "20%": { opacity: "0.18128" },
          "25%": { opacity: "0.83891" },
          "30%": { opacity: "0.65583" },
          "35%": { opacity: "0.67807" },
          "40%": { opacity: "0.26559" },
          "45%": { opacity: "0.84693" },
          "50%": { opacity: "0.96019" },
          "55%": { opacity: "0.08594" },
          "60%": { opacity: "0.20313" },
          "65%": { opacity: "0.71988" },
          "70%": { opacity: "0.53455" },
          "75%": { opacity: "0.37288" },
          "80%": { opacity: "0.71428" },
          "85%": { opacity: "0.70419" },
          "90%": { opacity: "0.70030" },
          "95%": { opacity: "0.36108" },
          "100%": { opacity: "0.24387" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
    fontFamily: {
      gamja: ["Gamja"],
      pstart: ["pstart"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
