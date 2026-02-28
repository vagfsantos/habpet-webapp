import { API } from "./api"

export const GET_USERS = async (payload) => {
  const response = await API.get('/users/', payload);
  return response.data;
}

export const REGISTER_USERS = async (payload) => {
  const response = await API.post('/users/', payload);
  return response.data;
}