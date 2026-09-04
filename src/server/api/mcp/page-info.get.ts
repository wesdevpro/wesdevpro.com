export default defineEventHandler(async (event) => {
  const pages = await getAllPages(event)
  const path = getQuery(event).path as string | undefined
  const page = path ? pages.find((entry) => entry.path === path) ?? null : null

  return {
    path: path ?? null,
    page,
    // Only sent when the path wasn't resolved server-side (no path given, or
    // no match) — this is the fallback an agent hitting the static build
    // relies on, since that build always serves its no-query default.
    ...(page ? {} : { pages }),
  }
})
