import { create } from "zustand";

const aatralStore = (set, get) => ({
  nameSection: {},
  aatral_top_sec_desc_cont: {
    heading_first: "This is",
    heading_last: "aatral-India",
    desc: " Aatral, a dynamic arm of The RISE, is an emerging circuit of collective leadership among global Tamil IT entrepreneurs, professionals, executives, and decision-makers, dedicated to transforming the IT ecosystem for sustained future growth.",
  },
  aatral_details: {
    heading_first: "Why",
    heading_last: "aatral?",
    desc: [
      "Aatral, a pivotal part of Tamil RISE, is a vibrant community, specifically designed for Tamil IT entrepreneurs seeking to connect, thrive and expand their horizons.",
      "By understanding challenges and opportunities inherent in the dynamic IT industry we have created a nurturing environment where like-minded individuals can come together to share insights, forge partnerships, and inspire one another to reach new heights of success.",
      "Whether you're a seasoned entrepreneur or just starting out, you'll find support, and gain access to resources, mentorship, and friendship in our community. ",
    ],
    image_heading: "Rev.Dr.Jegath Gaspar Raj",
  },
  setNameSection: () =>
    set((state) => ({
      nameSection: {
        heading_first: "The",
        heading_last: "Name",
        desc: " The term Aatral originates from the Tamil language, translating to power, efficiency, competence, and energy. This name perfectly aligns with our vision to empower Tamil youth in the IT sector.Aatral embodies the essence of what we strive to achieve: to harness the power of collective leadership, foster efficiency in innovation, build competence through skill development, and channel energy into transformative growth.",
      },
    })),
});

const useAatralStore = create(aatralStore);

export default useAatralStore;
