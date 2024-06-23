export interface ILoginResponse {
  token: string;
  success: boolean;
  message: string;
  user: {
    id: number;
    email: string;
  };
}

export interface ILoginPayload {
  email: string;
  password: string;
}
