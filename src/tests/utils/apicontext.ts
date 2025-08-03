import { request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

export async function getAPIContext(): Promise<APIRequestContext> {
  if (!apiContext) {
    apiContext = await request.newContext({
      baseURL: 'https://your-api-url.com',
      extraHTTPHeaders: {
        // add headers if needed
      }
    });
  }
  return apiContext;
}
