export default defineEventHandler(async (event) => {
  const pages = await getAllPages(event)
  const query = (getQuery(event).query as string | undefined) ?? ''

  return {
    query,
    results: searchPages(pages, query),
  }
})
