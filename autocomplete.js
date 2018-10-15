import { GoogleKey } from './APIkey';

const base = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';
const params = '&types=geocode&location=39.754148,-105.001458&radius=5000&key='

export const autocomplete = async ({address}) => {
  const url = `${base}${address}${params}${GoogleKey}`
  const response = await fetch(url);
  return await response.json();
}