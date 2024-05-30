import { create } from "zustand";

const membersStore = (set, get) => ({
founderData: [],
owner_brief_description: [
  {
    id: 1,
    founder_photo: "https://randomuser.me/api/portraits/women/59.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
  {
    id: 2,
    founder_photo: "https://randomuser.me/api/portraits/men/52.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
  {
    id: 3,    
    founder_photo: "https://randomuser.me/api/portraits/women/89.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
  {
    id: 4,  
    founder_photo: "https://randomuser.me/api/portraits/women/0.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
  {
    id: 5, 
    founder_photo: "https://randomuser.me/api/portraits/women/37.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
  {
    id: 6,
    founder_photo: "https://randomuser.me/api/portraits/women/76.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
  {
    id: 7,
    founder_photo: "https://randomuser.me/api/portraits/women/43.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
  {
    id: 8,
    founder_photo: "https://randomuser.me/api/portraits/men/50.jpg",
    company_logo: "https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg",  
    owner_name: "Owner name",
    company_name: "Company Name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Quam necessitatibus velit similique cum quidem itaque, doloribusprovident assumenda in eum numquam voluptate sed eos dolores. Doloremquealias vero fugiat autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.In, dolores consequatur iusto quaerat ex dolore voluptatibus alias commodi autem,quam dignissimos adipisci inventore provident? Fuga, hic. Sint voluptates earum deleniti.Mollitia, natus velit iusto illum omnis nobis a odit itaque!",
    website_link: "www.google.com",
    linkedIn: "www.linkedIn.com"
  },
    ],
  setFounderData: () =>
      set((state) => ({
          founderData: state.founderData = state.owner_brief_description
      })),
});

const useMemberStore = create(membersStore);

export default useMemberStore;