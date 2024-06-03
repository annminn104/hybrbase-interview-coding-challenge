import { z } from 'zod';

const configSchema = z.object({
  base: z.object({
    client: z.string()
  }),
  email: z.object({
    send: z.string(),
    receive: z.string(),
    password: z.string()
  }),
  googleSheet: z.object({
    sheetId: z.string(),
    type: z.string(),
    projectId: z.string(),
    privateKeyId: z.string(),
    privateKey: z.string(),
    clientEmail: z.string(),
    clientId: z.string(),
    authUri: z.string(),
    tokenUri: z.string(),
    authProviderX509CertUrl: z.string(),
    clientX509CertUrl: z.string(),
    universeDomain: z.string()
  })
});

const configEnv = configSchema.safeParse({
  base: {
    client: process.env.NEXT_PUBLIC_BASE_CLIENT
  },
  email: {
    send: process.env.GMAIL_EMAIL_SEND,
    password: process.env.GMAIL_EMAIL_PASSWORD
  },
  googleSheet: {
    sheetId: process.env.GG_SHEET_ID,
    type: process.env.GG_TYPE,
    projectId: process.env.GG_PROJECT_ID,
    privateKeyId: process.env.GG_PRIVATE_KEY_ID,
    privateKey: process.env.GG_PRIVATE_KEY,
    clientEmail: process.env.GG_CLIENT_EMAIL,
    clientId: process.env.GG_CLIENT_ID,
    authUri: process.env.GG_AUTH_URI,
    tokenUri: process.env.GG_TOKEN_URI,
    authProviderX509CertUrl: process.env.GG_AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: process.env.GG_CLIENT_X509_CERT_URL,
    universeDomain: process.env.GG_UNIVERSE_DOMAIN
  }
});

if (!configEnv.success) {
  console.error(configEnv);
  throw new Error('ENV Not Found!');
}

const envConfig = configEnv.data;
export default envConfig;
