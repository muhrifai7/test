import fetchRequest from '../../utils/api/fetchRequest';

export async function GetPrays() {
  try {
    const response = await fetchRequest('GET');
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
