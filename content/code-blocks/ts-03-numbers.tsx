/*= =============== Numbers ================ */
const integer = 6;
const float = 12.4;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o344;
const big = 100n;
const notANumber = NaN;

const inferredNumber = 6;
// inferredNumber: number

const inferredFloat = 12.4;
// inferredFloat: number

const inferredHex = 0xf00d;
// inferredHex: number

const inferredBinary = 0b1010;
// inferredBinary: number

const inferredOctal = 0o744;
// inferredOctal: number

const inferredBig = 100n;
// inferredBig: bigint

const inferredNaN = NaN;
// inferredBig: number

const inferredConstant = 12;
// inferredConstant: 12
