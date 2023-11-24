import type { PageServerLoad } from "./$types";
import { getGames } from "$lib/services/videogames";

export const load: PageServerLoad = async ({ url }) => {
  const page = url.searchParams.get("page") || "1"
  const perPage = url.searchParams.get("perPage") || "1"
  const { data, pagination } = await getGames(page, perPage)

  return {
    games: data,
    pagination
  }
}