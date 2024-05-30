import { create } from "zustand";

const partnersStore = (set) => ({
    partners: [],
    trainingPartners: [],
    partnerLogos: [],
    productOfTheMonth: [],
    partnersData: [
        {
            id: 1,
            partner_Logo: "https://seeklogo.com/images/D/demo-sport-logo-D8C6EB99C4-seeklogo.com.png",
            partner_Website: "www.google.com"
        },
        {
            id: 2,
            partner_Logo: "https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png",
            partner_Website: "www.google.com"
        },
        {
            id: 3,
            partner_Logo: "https://seeklogo.com/images/I/Its__Demo-logo-B2084EB133-seeklogo.com.png",
            partner_Website: "www.google.com"
        },
        {
            id: 4,
            partner_Logo: "https://seeklogo.com/images/F/FC_Barcelona-logo-D941E13B46-seeklogo.com.png",
            partner_Website: "www.google.com"
        },
        {
            id: 5,
            partner_Logo: "https://seeklogo.com/images/C/coca-cola-logo-F8128FBA92-seeklogo.com.png",
            partner_Website: "www.google.com"
        },
        {
            id: 6,
            partner_Logo: "https://seeklogo.com/images/V/volkswagen-logo-9069384A73-seeklogo.com.png",
            partner_Website: "www.google.com"
        },
        {
            id: 7,
            partner_Logo: "https://seeklogo.com/images/P/porsche-logo-5995000C95-seeklogo.com.png?v=638392745470000000",
            partner_Website: "www.google.com"
        },
    ],
    our_training_partners: [
        {
            id: 1,
            training_partner_logo: "https://seeklogo.com/images/D/demo-sport-logo-D8C6EB99C4-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 2,
            training_partner_logo: "https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 3,
            training_partner_logo: "https://seeklogo.com/images/I/Its__Demo-logo-B2084EB133-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 4,
            training_partner_logo: "https://seeklogo.com/images/F/FC_Barcelona-logo-D941E13B46-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 5,
            training_partner_logo: "https://seeklogo.com/images/C/coca-cola-logo-F8128FBA92-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 6,
            training_partner_logo: "https://seeklogo.com/images/V/volkswagen-logo-9069384A73-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 7,
            training_partner_logo: "https://seeklogo.com/images/P/porsche-logo-5995000C95-seeklogo.com.png?v=638392745470000000",
            training_partner_website: "www.google.com"
        },
        {
            id: 8,
            training_partner_logo: "https://seeklogo.com/images/H/honda-logo-2FBD864FD0-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 9,
            training_partner_logo: "https://seeklogo.com/images/S/samsung-logo-8A87EDFB33-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 10,
            training_partner_logo: "https://seeklogo.com/images/Y/yamaha-logo-A1BAD08804-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 11,
            training_partner_logo: "https://seeklogo.com/images/S/samsung-logo-4BDAA5DC5B-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 12,
            training_partner_logo: "https://seeklogo.com/images/P/puma-logo-B8E03BAABF-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 13,
            training_partner_logo: "https://seeklogo.com/images/A/adidas-logo-9AA835C1C2-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 14,
            training_partner_logo: "https://seeklogo.com/images/A/Audi-logo-ED84DFE2E3-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 15,
            training_partner_logo: "https://seeklogo.com/images/L/Louis_Vuitton-logo-FF97E85825-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 16,
            training_partner_logo: "https://seeklogo.com/images/S/Starbucks_Coffee-logo-DECE0A6E4B-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 17,
            training_partner_logo: "https://seeklogo.com/images/R/Real_Madrid_Club_de_Futbol-logo-60682932F8-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
        {
            id: 18,
            training_partner_logo: "https://seeklogo.com/images/U/UEFA_Champions_League-logo-DD9AE0500D-seeklogo.com.png",
            training_partner_website: "www.google.com"
        },
    ],
    partners_Logos: [
        {
            id: 1,
            logo: "https://seeklogo.com/images/D/demo-sport-logo-D8C6EB99C4-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 2,
            logo: "https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 3,
            logo: "https://seeklogo.com/images/I/Its__Demo-logo-B2084EB133-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 4,
            logo: "https://seeklogo.com/images/F/FC_Barcelona-logo-D941E13B46-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 5,
            logo: "https://seeklogo.com/images/C/coca-cola-logo-F8128FBA92-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 6,
            logo: "https://seeklogo.com/images/V/volkswagen-logo-9069384A73-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 7,
            logo: "https://seeklogo.com/images/P/porsche-logo-5995000C95-seeklogo.com.png?v=638392745470000000",
            partner_website: "www.google.com"
        },
        {
            id: 8,
            logo: "https://seeklogo.com/images/H/honda-logo-2FBD864FD0-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 9,
            logo: "https://seeklogo.com/images/S/samsung-logo-8A87EDFB33-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 10,
            logo: "https://seeklogo.com/images/Y/yamaha-logo-A1BAD08804-seeklogo.com.png",
            partner_website: "www.google.com"
        },
        {
            id: 11,
            logo: "https://seeklogo.com/images/S/samsung-logo-4BDAA5DC5B-seeklogo.com.png",
            partner_website: "www.google.com"
        },
    ],
    product_of_the_month: [
        {
            id: 1,
            // product_Logo: "https://seeklogo.com/images/D/demo-sport-logo-D8C6EB99C4-seeklogo.com.png",
            product_Website: "",
            product_description: "A Scrum/Agile product management tools streamline the development process by fostering collaboration, adaptability, and efficiency. These tools empower teams to break down complex projects into manageable tasks, prioritize work, and track progress in real-time. With features like sprint planning, backlog management, and performance analytics, they enable teams to iterate quickly, respond to change, and deliver high-quality products that meet customer needs.",
            company_name: "Unreal tech",
            product_name: "Agile PMT"
        },
        // {
        //     id: 2,
        //     product_Logo: "https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png",
        //     product_Website: "www.google.com",
        //     product_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni aliquam mollitia deleniti amet est nam beatae quasi nemo debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus labore, consequuntur aliquam in fugit eum, dolor recusandae, minima adipisci nihil ratione error rem nulla magnam eligendi magni ea itaque. Aliquam facilis est porro numquam cum libero beatae quis neque, nam, esse consectetur pariatur earum iure mollitia dolorem expedita quidem. Nulla excepturi iste provident quaerat reprehenderit accusantium, enim fuga officiis adipisci hic, tenetur architecto id velit? Doloremque amet iusto officia!",
        //     company_name: "Company Name",
        //     product_name: "Product Name"
        // },
        // {
        //     id: 3,
        //     product_Logo: "https://seeklogo.com/images/I/Its__Demo-logo-B2084EB133-seeklogo.com.png",
        //     product_Website: "www.google.com",
        //     product_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni aliquam mollitia deleniti amet est nam beatae quasi nemo debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus labore, consequuntur aliquam in fugit eum, dolor recusandae, minima adipisci nihil ratione error rem nulla magnam eligendi magni ea itaque. Aliquam facilis est porro numquam cum libero beatae quis neque, nam, esse consectetur pariatur earum iure mollitia dolorem expedita quidem. Nulla excepturi iste provident quaerat reprehenderit accusantium, enim fuga officiis adipisci hic, tenetur architecto id velit? Doloremque amet iusto officia!",
        //     company_name: "Company Name",
        //     product_name: "Product Name"
        // },
        // {
        //     id: 4,
        //     product_Logo: "https://seeklogo.com/images/F/FC_Barcelona-logo-D941E13B46-seeklogo.com.png",
        //     product_Website: "www.google.com",
        //     product_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni aliquam mollitia deleniti amet est nam beatae quasi nemo debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus labore, consequuntur aliquam in fugit eum, dolor recusandae, minima adipisci nihil ratione error rem nulla magnam eligendi magni ea itaque. Aliquam facilis est porro numquam cum libero beatae quis neque, nam, esse consectetur pariatur earum iure mollitia dolorem expedita quidem. Nulla excepturi iste provident quaerat reprehenderit accusantium, enim fuga officiis adipisci hic, tenetur architecto id velit? Doloremque amet iusto officia!",
        //     company_name: "Company Name",
        //     product_name: "Product Name"
        // },
        // {
        //     id: 5,
        //     product_Logo: "https://seeklogo.com/images/C/coca-cola-logo-F8128FBA92-seeklogo.com.png",
        //     product_Website: "www.google.com",
        //     product_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni aliquam mollitia deleniti amet est nam beatae quasi nemo debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus labore, consequuntur aliquam in fugit eum, dolor recusandae, minima adipisci nihil ratione error rem nulla magnam eligendi magni ea itaque. Aliquam facilis est porro numquam cum libero beatae quis neque, nam, esse consectetur pariatur earum iure mollitia dolorem expedita quidem. Nulla excepturi iste provident quaerat reprehenderit accusantium, enim fuga officiis adipisci hic, tenetur architecto id velit? Doloremque amet iusto officia!",
        //     company_name: "Company Name",
        //     product_name: "Product Name"
        // },
    ],
    setPartners: () => set((state) => ({ partners: state.partners = state.partnersData })),
    setTrainingPartners: () => set((state) => ({ trainingPartners: state.trainingPartners = state.our_training_partners })),
    setPartnerLogos: () => set((state) => ({ partnerLogos: state.partnerLogos = state.partners_Logos })),
    setProductOfTheMonth: () => set((state) => ({ productOfTheMonth: state.productOfTheMonth = state.product_of_the_month })),
});

const usePartnersStore = create(partnersStore);

export default usePartnersStore;