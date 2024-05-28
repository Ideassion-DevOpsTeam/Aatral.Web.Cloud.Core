import { create } from "zustand";

// assets
import PersonOne from "../../assets/Images/ceo.png";
import { ReactComponent as MikeIcon } from "../../assets/Icons/Home/Mike.svg";
import { ReactComponent as Opportunity } from "../../assets/Icons/Home/oppturnity.svg";
import { ReactComponent as Collaborating } from "../../assets/Icons/Home/colloboration.svg";
import { ReactComponent as Growth } from "../../assets/Icons/Home/growth.svg";

const homeStore = (set, get) => ({
  home_get_sec_icons_cont: {
    heading_first: "What you",
    heading_last: "get",
    desc: [
      "Joining the Aatral community opens doors to introducing, showcasing, and promoting your products across our digital platforms.",
      "Additionally, you'll have the opportunity to host events and meetups within your network and organize training workshops in your organization by collaborating with our training partners. ",
    ],
    icon_div: [
      {
        icon: <MikeIcon />,
        title: "Marketing",
      },
      {
        icon: <Opportunity />,
        title: "Opportunity",
      },
      {
        icon: <Collaborating />,
        title: "Collaborating",
      },
      {
        icon: <Growth />,
        title: "Growth",
      },
    ],
  },

  home_get_sec_desc_cont: {
    card_details: [
      {
        name: "Imthyaz Seriff",
        image: PersonOne,
        postion: "CEO, Ideassion Group",
        desc: "Joing Aatral business. The networking opportunities alone have been invaluable. I've connected with like-minded entrepreneurs, found potential collaborators, and gained insights that have helped me navigate the ever-changing landscape of technology and business.",
      },
      {
        name: "Syed Magdoom",
        image: PersonOne,
        postion: "Triton Tech Labs",
        desc: "Being part of aatral has not only expanded my professional network but also provided me with access to resources and expertise that I wouldn't have had otherwise. The workshops and guest speaker events have been particularly enlightening, offering practical advice and strategies for scaling my IT business.",
      },
      {
        name: "Gugapriya",
        image: PersonOne,
        postion: "IITT",
        desc: "As a Solo entrepreneur in the tech industry, it can sometimes feel isolating. However, since joining aatral, I've found a supportive community of peers who understand the unique challenges and opportunities of running a tech-focused business. Whether it's sharing tips for software development or discussing the latest trends in cybersecurity, I always come away from club meetings feeling inspired and empowered.",
      },
    ],
  },
});

const useAatralHomeStore = create(homeStore);

export default useAatralHomeStore;
