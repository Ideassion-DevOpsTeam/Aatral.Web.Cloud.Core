import { create } from "zustand";

// assets
import PersonOne from "../../assets/Images/ceo.png";
import { ReactComponent as MikeIcon } from "../../assets/Icons/Home/Mike.svg";
import { ReactComponent as Opportunity } from "../../assets/Icons/Home/oppturnity.svg";
import { ReactComponent as Collaborating } from "../../assets/Icons/Home/colloboration.svg";
import { ReactComponent as Growth } from "../../assets/Icons/Home/growth.svg";

// api
import { getTestimonials } from "../../api";

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
});

const useAatralHomeStore = create(homeStore);

export default useAatralHomeStore;
