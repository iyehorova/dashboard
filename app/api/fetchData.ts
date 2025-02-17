import { SearchParams } from '../interfaces/SearchParams';

const baseUrl = process.env.BASE_URL;

const convertToRecord = (params: SearchParams): Record<string, string> => {
  const record: Record<string, string> = {};
  if (params.page) record.page = params.page;
  if (params.limit) record.limit = params.limit;
  if (params.query) record.query = params.query;
  return record;
};

// const startParams: SearchParams = {
//   limit: '',
//   page: '',
//   query: ''
// };

export async function fetchData(params: SearchParams) {
  // let currentParams = params;
  // // if (!params) {
  // //   currentParams = startParams;
  // // }
  const query = new URLSearchParams(convertToRecord(params)).toString();

  const url = `${baseUrl}?prop_ModuleId=2053&${query}`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
