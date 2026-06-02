const API_BASE =
  import.meta.env.MODE === "production" ? "/api" : "http://localhost:5000/api";

/**
 * Fetch all projects from the backend.
 * @returns {Promise<Array>} Array of project objects or empty array on failure.
 */
export async function fetchProjects() {
  try {
    const response = await fetch(`${API_BASE}/projects`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetchProjects failed:", error);
    return [];
  }
}

/**
 * Fetch all speaking engagements from the backend.
 * @returns {Promise<Array>} Array of speaking objects or empty array on failure.
 */
export async function fetchSpeaking() {
  try {
    const response = await fetch(`${API_BASE}/speaking`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetchSpeaking failed:", error);
    return [];
  }
}
