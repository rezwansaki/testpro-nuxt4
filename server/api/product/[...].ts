export default defineEventHandler(async(event) => {
    const id = event.context.params._;
    console.log(id);
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  return await $fetch(`https://dummyjson.com/products/${id}`);
})