'use server';

import jwt from 'jsonwebtoken';

export async function signJWT(id: string, expiresIn?: number) {
  return jwt.sign({ id }, process.env.AUTH_SECRET!, {
    expiresIn,
  });
}