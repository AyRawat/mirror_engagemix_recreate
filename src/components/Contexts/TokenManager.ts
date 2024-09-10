// singleton to manage the access token
let accessToken = "";

export const TokenManager = {
  getAccessToken: () => accessToken,
  setAccessToken: (token: string) => {
    accessToken = token;
  },
};