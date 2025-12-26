tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['"Nunito"', "sans-serif"] },
      colors: {
        coffee: {
          50: "#F3EFEC",
          75: "#CFBFB1",
          100: "#BBA490",
          200: "#9E7D60",
          300: "#8A6240",
          400: "#61452D",
          500: "#543C27",
        },
      },
    },
  },
};

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#6F4E37", // Coffee Bean
        secondary: "#D4A373", // Latte
        accent: "#E63946", // Red
        background: "#FAFAF9", // Off-white
        surface: "#FFFFFF",
        dark: "#2C2C2C",
        footer: "#F5F5F5", // Footer BG
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        nav: "0 -4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 2px 10px rgba(0,0,0,0.03)",
        header: "0 1px 0 rgba(0,0,0,0.05)",
      },
      screens: {
        xs: "375px",
        md: "768px",
        lg: "1024px", // Laptop
        xl: "1280px", // Desktop Besar
      },
    },
  },
};
