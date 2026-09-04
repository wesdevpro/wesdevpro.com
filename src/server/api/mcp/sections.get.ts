export default defineEventHandler(async (event) => {
  const pages = await getAllPages(event)
  return { sections: getSections(pages) }
})
