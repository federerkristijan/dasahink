// import { createClient } from "contentful";

// const useContentful = () => {
//   const client = createClient({
//     spaceID: "uccluovdgwhe",
//     accessToken: "ENfVDoltlnHcZ9m0SmClqVyrVQ60_QmDkB-fhhOIduI",
//     // for deliver instead of preview comes cdn
//     host: "preview.contentful.com",
//   });

//   // returns a promise, therefore async
//   const getData = async () => {
//     try {
//       // if not argument given, it will fetch everything
//       const entries = await client.getEntries({
//         content_type: "data",
//         select: "fields",
//       });

//       const sanitizedEntries = entries.items.map((item) => {
//         const image = item.fields.image.fields;

//         return {
//           ...item.fields,
//           image,
//         };
//       });

//       return entries;
//     } catch (error) {
//       console.log("Error fetching data: ${error}");
//     }
//   };

//   return { getData };
// };

// export default useContentful;
