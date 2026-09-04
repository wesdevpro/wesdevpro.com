export default defineEventHandler(async (event) => {
  return buildMcpManifest(event)
})
