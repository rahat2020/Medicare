/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"]
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem"
      }
    },
    extend: {
      keyframes: {
        stripes: {
          "0%": {
            backgroundPosition: "0 0"
          },
          "100%": {
            backgroundPosition: "160px 0"
          }
        }
      },
      colors: {
        brand: {
          DEFAULT: "var(--brand-color)",
          secondary: "#FFCC42",
          link: "#004E92",
          light: "#E6F6FC"
        },
        icons: {
          facebook: "#0863F7",
          twitter: "#1C9CEA",
          instagram: "#F70A85",
          linkedin: "#2464AD"
        },
        white: {
          DEFAULT: "#FFF",
          light: "#FAFBFC"
        },
        bar: {
          blue: "#021457",
          orange: "#f25100",
          purple: "#8532a8"
        },
        yellow: {
          DEFAULT: "#FFAB00",
          light: "#FFF1D4",
          mini: "#FFF1D480"
        },
        red: {
          DEFAULT: "#FE475B",
          light: "#FFDADE"
        },
        green: {
          DEFAULT: "#0CAA1B",
          light: "#DAF2DC",
          soft: "rgba(12, 170, 27, 0.05)",
          mini: "rgba(228, 244, 244, 0.00)"
        },
        blue: {
          DEFAULT: "#44A9F1",
          light: {
            DEFAULT: "#E3F2FD",
            800: "#C0CCEA"
          },
          soft: "#EDECFE"
        },
        gray: {
          DEFAULT: "#F3F4F8",
          blues: "#EDECFE",
          deep: "#8F99AD",
          light: "#EEF0F3"
        },
        border: {
          DEFAULT: "#B7B7B7",
          regular: "#797979",
          dark: "#3B3B3B",
          light: "#D8E0ED"
        },
        orange: {
          DEFAULT: "#FF834D",
          light: "#FF834D40",
          soft: "rgba(255, 133, 45, 0.05)"
        },
        seagreen: {
          DEFAULT: "#00B8D9",
          light: "#00B8D933"
        },
        dark: "#21214E",
        regular: "#5C5D76",
        disabled: "#F8F9FB",
        perple: "#5A49B4",
        meganta: "#B43490",
        brown: "#9B6546",
        deepblue: "#2B82B4",
        softGray: "#FAF9FF",
        borderLight: "#8D91A5",
        softPink: "#FFDADE80"
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800"
      },
      fontSize: {
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        40: "40px"
      },
      placeholderColor: {
        gray: "#D8E0ED"
      },
      borderColor: {
        gray: "#D8E0ED"
      },
      width: {
        540: "540px",
        265: "265px",
        7.2: "34px",
        307: "307px",
        292: "292px"
      },
      height: {
        590: "590px",
        7.2: "34px"
      },
      boxShadow: {
        "box-shadow": "0px 0px 15px 0px rgba(0, 0, 0, 0.06)"
      }
    },
    plugins: [],
    corePlugins: {
      preflight: false
    }
  },
  plugins: []
};
