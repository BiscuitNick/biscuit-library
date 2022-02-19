import type { DiceFace } from "./Dice";

const faceImages = [
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/0.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/7.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/8.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/9.png",
];

const oneToSix: DiceFace[] = [
  {
    img: faceImages[1],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[2],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[3],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[4],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[5],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
  {
    img: faceImages[6],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
];

const zeroToFive: DiceFace[] = [
  {
    img: faceImages[0],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[1],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[2],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[3],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[4],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
  {
    img: faceImages[5],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
];

const sixToNine: DiceFace[] = [
  {
    img: faceImages[6],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[7],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[8],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[9],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[0],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
  {
    img: faceImages[1],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
];

const sixToFive: DiceFace[] = [
  {
    img: faceImages[6],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[1],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[2],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[3],
    text: null,
    backgroundColor: "#000000",
    border: `2px solid black`,
  },
  {
    img: faceImages[4],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
  {
    img: faceImages[5],
    text: null,
    backgroundColor: null,
    border: `2px solid black`,
  },
];

export { faceImages, oneToSix, zeroToFive, sixToNine, sixToFive };
