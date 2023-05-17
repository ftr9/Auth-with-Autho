interface AuthoConfig {
  authRequired: boolean;
  auth0Logout: boolean;
  secret: string;
  baseURL: string;
  clientID: string;
  issuerBaseURL: string;
}

export const config: AuthoConfig = {
  authRequired: false,
  auth0Logout: false,
  secret: 'secret string',
  baseURL: 'string',
  clientID: 'string',
  issuerBaseURL: 'string',
};
