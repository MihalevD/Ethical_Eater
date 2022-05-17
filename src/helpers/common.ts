export const pxToNumber = <T>(value?: T): number | undefined =>
  typeof value === "string" ? +value.substr(0, value.length - 2) : undefined;
