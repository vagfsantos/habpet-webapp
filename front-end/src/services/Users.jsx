import { API } from "./api"

export const REGISTER_USERS = async (payload) => {
  const response = await API.post('/users/', payload);
  return response.data;
}