import HttpClient from 'src/utils/HttpClient';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';

const httpClientOptions = { useAccessToken: false };

const listed = async ({ query, page }) => {
  let responseData;

  try {
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.get('/api/v1/products/listed', {
      params: {
        q: query,
        page
      }
    });
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }
  const { result } = responseData;

  return result;
};

const ProductService = {
  listed
};

export default ProductService;
