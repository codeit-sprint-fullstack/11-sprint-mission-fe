const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const request = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`HTTP ERROR: ${response.status}`);
    }

    // 204 No Content (삭제 시 사용)
    if (response.status === 204) return null;

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
