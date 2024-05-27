import NetworkPersonOne from "../../assets/Images/network/networkPersonOne.png";
import NetworkPersonTwo from "../../assets/Images/network/networkPersonTwo.png";
import NetworkPersonThree from "../../assets/Images/network/networkPersonThree.png";
import NetworkPersonFour from "../../assets/Images/network/networkPersonFour.png";
import NetworkPersonFive from "../../assets/Images/network/networkPersonFive.png";
import NetworkPersonSix from "../../assets/Images/network/networkPersonSix.png";
import NetworkPersonSeven from "../../assets/Images/network/networkPersonEight.png";
import NetworkPersonEight from "../../assets/Images/network/networkPersonNine.png";
import NetworkPersonNine from "../../assets/Images/network/networkPersonSeven.png";

import Logo from "../../assets/Icons/network/centerSymbol.svg";

export const nodes = [
  {
    id: 1,
    shape: "circularImage",
    image: Logo,
    size: 60,
    borderWidth: 5,
    color: {
      border: "#FBAF1A",
    },
  },
  { id: 2, shape: "circularImage", image: NetworkPersonTwo },
  { id: 3, shape: "circularImage", image: NetworkPersonThree },
  {
    id: 4,
    shape: "circularImage",
    image: NetworkPersonFour,
  },
  { id: 5, shape: "circularImage", image: NetworkPersonFive },
  { id: 6, shape: "circularImage", image: NetworkPersonSix },
  { id: 7, shape: "circularImage", image: NetworkPersonSeven },
  { id: 8, shape: "circularImage", image: NetworkPersonEight },
  { id: 9, shape: "circularImage", image: NetworkPersonNine },
  { id: 10, shape: "circularImage", image: NetworkPersonOne },
];

export const edges = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 1, to: 5 },
  { from: 2, to: 3 },
  { from: 9, to: 10 },
  { from: 3, to: 4 },
  { from: 10, to: 7 },
  { from: 3, to: 6 },
  { from: 4, to: 5 },
  { from: 2, to: 9 },
  { from: 5, to: 8 },
];
