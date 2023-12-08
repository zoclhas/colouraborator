export interface UserLogin {
  exp: number;
  message: string;
  token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  loginAttempts: number;
}

export interface Error {
  errors: { message: string }[];
}
