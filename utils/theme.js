const calcRem = (size) => `${size / 16}rem`;

const common = {
  flex: `display: flex;`,

  flexHorizontalCenter: `
   justify-content: center;
   `,

  flexVerticalCenter: `
   align-items: center;
   `,

  flexAlignCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
   `,

  flexRow: `
   flex-direction: row;
   `,

  flexSpaceBetween: `
    justify-content: space-between;
   `,

  flexEnd: `
   justify-content: flex-end;
   `,

  flexColumn: `
    flex-direction: column;
   `,

  flexWrap: `
    flex-wrap: wrap;
   `,

  screenWidth: `width: 28rem`,
};

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const colors = {
  white: "#fff",
  black: "#000",
  black2: "#555555",
  gray: "#bdbdbd",
  gray2: "#ebebeb",
  lightGray: "#f5f5f5",
  lightGray2: "#eeeeee",
  darkGray: "#999999",
  darkGray2: "#6e6e6e",
};

const fontWeight = {
  font100: "100",
  font200: "200",
  font300: "300",
  font400: "400",
  font500: "500",
  font600: "600",
  bold: "bold",
};

const theme = {
  common,
  fontSizes,
  paddings,
  margins,
  deviceSizes,
  device,
  colors,
  fontWeight,
};

export default theme;
