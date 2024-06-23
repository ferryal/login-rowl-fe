import axios from "axios";
import { ILoginPayload, ILoginResponse } from "./types";
import { useMutation } from "@tanstack/react-query";

const API_URL = '/api/login';

const createLogin = async (payload: ILoginPayload): Promise<ILoginResponse> => {
	try {
	  const response = await axios.post(API_URL, payload);
	  return response.data;
	} catch (error) {
	  throw new Error('Invalid email or password');
	}
  };

const useCreateLogin = () => {
  return useMutation<ILoginResponse, Error, ILoginPayload>({
    mutationFn: createLogin,
  });
};

export default useCreateLogin;
