//https://www.youtube.com/watch?v=kOOs7h9YL_g
import { google } from "googleapis";

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCpaTX8Iw2oOqvS\nYcCn7h1Gn4tIPvYPKGfuSV05RzB6MnUDOjpHGNbSSHzgm1zT6Jr7/RGEDy8CIwKM\nwpp2xZKNzyAueGEu9MnuVmxRuh/rDUtFGD4+ktmB3tGIQsJFaO4fjRC0Qpotnsvn\nbYSjdzrSYiWgqvi6+6WBkUOPh8w7B4AHk8ODHUOHCjM9dnALFe1fF+qe4F+TYzwR\ngX4nIONPlaTnojPMIaupWsNPardn6PNdwK3ymGseiiLFb0DMlwEvTsMgZ1ptfb/J\nK4QS49oaDqUrUrL51kfAj716IroAsWk3JBHXtrvWTsVG3gT8zeu5YmF/1RChmnVp\nvpLQAqw1AgMBAAECggEAJg5OZD9zl/DmHDJ9Vrv0s6KvZSFPoQQQpMSyPmWxjCG9\ni2YPJV19FGvYMZR0+91qw2SMBMBsbOx0bC5jCH9FdrmqnwXHvwaaPgIH/yvyc5je\n6bySbvgKCFSHeTaV8YWqyEemEvhLLihX4bsGaroj6pLFpRwDF+3jtgFtzdZRmIiu\nxiPp9yGyPlpLcPSzQj1ZPaCCDj+0b+Rce5hup1k9mU85Uk7qJZECrELXKULXw7hL\nGir4UOV5gCxBJS0IdY298q9bXZRUiB4XBIiyoSMV7cxJH5+FS9e4jSi+06zsCW08\n2wwDyFJmwGiYn+Gh0WGayNoUha91jPin+0sa7oBJwQKBgQDlivgzN5GzhlDGEebN\nJlHeLfQGMmTYrUC5KrEpgyweuCl8nLIjBt2CuPyWyXDW7S3fJOCxK341vGmKaUWb\n0aI3gWs/GucLtllGppux3Hbdod0AXlBUNgRdrQ97fVZ+vkPdO5Syuw2pRipFW4Yd\nnVhfDpWwk4542Jj8iwvSrV13rQKBgQC87/Q17ImyA8aBqth+A0Foaj/2q0LB7I4J\nvHkjXS9aKV73McoLnXXRjgZD9j0wY6MjNBMIbj+fZHYyBMNDxBK9f+PCHlaApg5D\n4RR6gXJSzsCZf+U+vt0kCR1ZhllCw/QQEGlhMVmfBE/ib87Qin1NVCcf3lSEcPHO\nNzlNYAq3qQKBgBgGCmH53+LlHNEOEJTJ/Ol+77oyTgGraEm44R/SHaz9Y0IqeC5Y\nSpii2bTCUm/8FL/08Rs5zRS8qmMVD3b2Yr7iaaIKI8JDDGbriwH7a+lYRnQCau/V\nU3Gmaidnf8T2Ds45rR9jmlNsB4KIyKmSzSvtr9byKogVSzWrK8qZ4F1lAoGAPwvf\nNQNKa3GhEvHcrigN8nbKA1jgvO9f8lXHIorc2zxE6T3fCwMvJo86/gC0KGqHLJ8a\n3sxTRK/0VPqL4hgSnNOJP+R5vxIqXnJEMCDz8jf1wwMPj2GHT5gPCCmxrXrP/XBM\nidc67bo1ofznSWV9LImxSIwbLdq2hbad03kB+okCgYBZ/MdFG/dtRM12/AXpMUnB\nWiFPn0vLS+sSZrMRYNGKP05wvNHTzFkLNbVyhu2IKCGBKNos96oAtQPcYnIvAmGn\nZqK9mxC6hDDxZb9Z6nR8RETGcDAmAS1WrhSyFzCYHhG9/HF/vWo02VvpzA3j4oZq\nMWbJp32qbgqZK5HQxbkvqw==\n-----END PRIVATE KEY-----\n",
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() } as any);
  const range = "categorias!A1:Z1000";

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });
    return new Response(JSON.stringify(response.data.values));
  } catch (error) {
    console.error('The API returned an error: ' + error);
    return new Response('The API returned an error: ' + error);
  }
};