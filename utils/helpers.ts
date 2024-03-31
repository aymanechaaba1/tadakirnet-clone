import { JWTPayload } from 'jose';
import { MoroccanCitiesResponse } from '@/types/moroccan-cities';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { validJWT } from '@/middleware';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCities() {
  const res = await fetch(
    'https://parseapi.back4app.com/classes/List_of_Morroco_cities?order=asciiname',
    {
      headers: {
        'X-Parse-Application-Id': '2ZOfB60kP39M5kE4WynRqyP7lNGKZ9MB8fVWqAM9', // This is the fake app's application id
        'X-Parse-Master-Key': 'Qq7lEIoEEzRris3IM6POE5ewvYuzACVyA6VKtiVb', // This is the fake app's readonly master key
      },
    }
  );

  if (!res.ok) throw new Error(`something went wrong!`);

  const data: MoroccanCitiesResponse = await res.json();
  return data;
}

export const AUTH_SECRET = 'PelB28zt6umH8KoSiWaxV5q0B9E49ocUdoJlLPixHSw=';
export function generateJWT(id: string, expiresIn?: number) {
  return jwt.sign({ id }, AUTH_SECRET, {
    expiresIn,
  });
}

export const getFirstLetters = (...names: string[]) =>
  names.map((name) => name[0].toUpperCase()).join('');
