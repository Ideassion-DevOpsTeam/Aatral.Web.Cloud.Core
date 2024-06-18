import { create } from "zustand";
import { useLazyQuery } from "@apollo/client";

// aatralPages {
//     data {
//         id
//         attributes {
//             Key
//             Value
//         }
//     }
// }
const contentStore = (set, get) => ({
    initialState: {
        contentData:{}
    },


    setContent: (data) => {
        const filteredData = data.reduce((acc, item) => { return { ...acc, [item?.attributes?.Key]: item?.attributes?.Value } })
      
        set((state) => ({
         contentData :filteredData
      }))
    }
});





const useContentStore = create(contentStore);

export default useContentStore;