import fetchRequest from '../../utils/api/fetchRequest';

export async function GetMovies(patch) {
  try {
    const response = await fetchRequest('GET', patch);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetMovie(patch) {
  try {
    const response = await fetchRequest('GET', patch);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
