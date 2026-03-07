import { API } from "./Api"
import { ENDPOINTS } from "./Endpoints"

export const postAuth = async (payload) => {
  const response = await API.post(`${ENDPOINTS.AUTH}/`, payload);
  return response.data;
}

