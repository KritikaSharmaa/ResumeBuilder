module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        DarkBlue: "#212125",
        BabyPink: "#F7DAD9",
        FaceColor: "#FFF5DA",
        LightBrown: "#5D534A",
        BabyBrown: "#dFbF9F",
        MateBlack: "#191919",
        LightPurple: "#8785A2",
        teal: "#00cccc",
      },
      backgroundImage: (theme) => ({
        BackImg1:
          "linear-gradient(to right bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.1)),url('https://thumbs.dreamstime.com/b/white-purple-abstract-background-design-white-purple-abstract-background-design-white-modern-background-138453758.jpg')",
        TempBackImg:
          "url('https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f6d09853-3162-42dd-bc42-a2d3c11096f1.jpg')",
      }),
      zIndex: {
        m1: "-1",
        m3: "-3",
        m5: "-5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
