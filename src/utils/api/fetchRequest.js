// @flow
import axios from 'axios';
import Config from 'react-native-config';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH';

export default async function fetchRequest(
  method: Method,
  path: string,
  data: any,
): any {
  try {
    const token = undefined;
    const api_key = 'f7b67d9afdb3c971d4419fa4cb667fbf';
    if (token != undefined) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
        {
          method,
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    } else {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
        {
          method,
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: data,
        },
      );
      const result = await response.json();
      if (result.error != null) {
        throw result.error;
      } else {
        return result;
      }
    }
  } catch (error) {
    throw error;
  }
}
