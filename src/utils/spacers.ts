import { pxToNumber } from "../helpers/common";

const spacers = {
  smaller: "10p",
  small: "15px",
  xsMedium: "20px",
  medium: "25px",
  big: "40px",
};

type SpacingType = {
  smaller: number;
  small: number;
  xsMedium: number;
  medium: number;
  big: number;
};

const Spacing = Object.keys(spacers).reduce((a, b) => {
  a[b] = pxToNumber(spacers[b]);
  return a;
}, {});

export default Spacing as SpacingType;
