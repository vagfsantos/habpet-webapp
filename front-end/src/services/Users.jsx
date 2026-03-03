import { API } from "./api"
import { ENDPOINTS } from "./Endpoints";

export const postRegisterUser = async (payload) => {
  const response = await API.post(`${ENDPOINTS.USERS}`, payload);
  return response.data;
}