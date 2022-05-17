import { pxToNumber } from "../helpers/common";

export const fontSizes = {
  heading1: "40px",
  heading2: "30px",
  heading3: "25px",
  bodyText1: "20px",
  bodyText2: "18px",
  bodyText3: "15px",
  buttonText1: "25px",
  buttonText2: "20px",
};

type FontSizeType = {
  heading1: number;
  heading2: number;
  heading3: number;
  bodyText1: number;
  bodyText2: number;
  bodyText3: number;
  buttonText1: number;
  buttonText2: number;
};

const FontSize = Object.keys(fontSizes).reduce((a, b) => {
  a[b] = pxToNumber(fontSizes[b]);
  return a;
}, {});

export default FontSize as FontSizeType;
