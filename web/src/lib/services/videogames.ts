import { API_URL } from "$env/static/private";
import { compile as compileMDX } from "mdsvex";

export async function getGames(page = "1", perPage = "1") {
  const res = await fetch(`${API_URL}/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[pageSize]=${perPage}&pagination[page]=${page}`)

  if (!res.ok) {
    throw new Error('Somethin went wrong')
  }

  const { data, meta } = await res.json()
  
  const mapData = await Promise.all(data.map(async ({ attributes, id }: { id: number, attributes: { title: string, description: string, cover: { data: { attributes: { url: URL | string } } } } }) => {
    const { title, description } = attributes 
    const compiledDescription = await compileMDX(description) || { code: "" };
    const { url: cover } = attributes.cover.data.attributes

    return {
      title,
      description: compiledDescription.code,
      cover,
      id
    }
  }))

  return { data: mapData, pagination: meta.pagination}
}