const API_KEY = "7533378071154d42917b6b92485bcede"
const BASE_URL = "https://api.rawg.io/api"

// Get games list with pagination
export const getGames = async (page = 1, pageSize = 12, search = "") => {
  try {
    const searchParam = search ? `&search=${search}` : ""
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=${pageSize}${searchParam}`)

    if (!response.ok) {
      throw new Error("Error fetching games")
    }

    return await response.json()
  } catch (error) {
    console.error("Error in getGames:", error)
    throw error
  }
}

// Get game details
export const getGameDetails = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${gameId}?key=${API_KEY}`)

    if (!response.ok) {
      throw new Error("Error fetching game details")
    }

    return await response.json()
  } catch (error) {
    console.error("Error in getGameDetails:", error)
    throw error
  }
}

// Get publishers list with pagination
export const getPublishers = async (page = 1, pageSize = 12, search = "") => {
  try {
    const searchParam = search ? `&search=${search}` : ""
    const response = await fetch(
      `${BASE_URL}/publishers?key=${API_KEY}&page=${page}&page_size=${pageSize}${searchParam}`,
    )

    if (!response.ok) {
      throw new Error("Error fetching publishers")
    }

    return await response.json()
  } catch (error) {
    console.error("Error in getPublishers:", error)
    throw error
  }
}

// Get publisher details
export const getPublisherDetails = async (publisherId) => {
  try {
    const response = await fetch(`${BASE_URL}/publishers/${publisherId}?key=${API_KEY}`)

    if (!response.ok) {
      throw new Error("Error fetching publisher details")
    }

    return await response.json()
  } catch (error) {
    console.error("Error in getPublisherDetails:", error)
    throw error
  }
}

// Get games by publisher
export const getGamesByPublisher = async (publisherId, page = 1, pageSize = 12) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&publishers=${publisherId}&page=${page}&page_size=${pageSize}`,
    )

    if (!response.ok) {
      throw new Error("Error fetching games by publisher")
    }

    return await response.json()
  } catch (error) {
    console.error("Error in getGamesByPublisher:", error)
    throw error
  }
}

// Get games by tag
export const getGamesByTag = async (tagId, page = 1, pageSize = 12) => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&tags=${tagId}&page=${page}&page_size=${pageSize}`)

    if (!response.ok) {
      throw new Error("Error fetching games by tag")
    }

    return await response.json()
  } catch (error) {
    console.error("Error in getGamesByTag:", error)
    throw error
  }
}

// Get games by genre
export const getGamesByGenre = async (genreId, page = 1, pageSize = 12) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&genres=${genreId}&page=${page}&page_size=${pageSize}`,
    )

    if (!response.ok) {
      throw new Error("Error fetching games by genre")
    }

    return await response.json()
  } catch (error) {
    console.error("Error in getGamesByGenre:", error)
    throw error
  }
}

