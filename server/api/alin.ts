// to get only name value
export default defineEventHandler(async (event) => {
  return {
    name:'alin'
  }
});

// to get all data from api 
// export default defineEventHandler(async (event) => {
//   return await $fetch("https://dummyjson.com/products");
// });