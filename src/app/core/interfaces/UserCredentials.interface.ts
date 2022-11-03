export interface RegisterBodyUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  roleId: number;
  points: number;
}

export interface LoginBodyUser {
  email: string;
  password: string;
}
