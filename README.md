# HYBRBASE - INTERVIEW - TECHNICAL - CHALLENGE

## Demo

- [https://matthew-hybrbase.vercel.app](https://matthew-hybrbase-coding-challenge.vercel.app)

### Description

Web ordering products with 3 packages basic, standard, premium. When the order is completed, it will send an email to the user using "nodemailer" and save that data record for the admin in a google sheet using "GoogleSheetAPI".

The code is written in NextJS 14 and React 18 with the theme set from MUI-React (Material UI) and styled-component.

### How it works

When choosing an order package, an api will be called to "/api/order" the api is created with NextJS create [Api-routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) on the server side of NextJS it will call
Mail service from nodemailer to send emails to users and save data records for admins in google sheets

### Technologies Used

- [NodeJS v18](https://nodejs.org/en)
- [React v18](https://react.dev)
- [NextJS v14](https://nextjs.org)
- [Nodemailer v6](https://www.npmjs.com/package/nodemailer) - Send an order confirmation email to the customer
- [GoogleApis v137](https://www.npmjs.com/package/googleapis) - Save data sent to users in Google Sheets
- [MUI (Material UI) v5.15](https://mui.com)
- [React Hook Form](https://react-hook-form.com) - Validate form
- [Zod](https://zod.dev) - create schema declaration and validation

### Commit-tools

- [Commitlint]() - Commit rules
- [Husky]() - Automatically lint your commit messages, code, and run tests upon committing or pushing.
- [Eslint]() - ESLint statically analyzes your code to quickly find problems
- [Prettier]() - An opinionated code formatter
- [Lint-staged]() - Check for changed files

### How to start

**Config ENV**

```shell
# HOST
NEXT_PUBLIC_BASE_CLIENT = "http://localhost:5050"

# GG OAUTH send mail
GMAIL_EMAIL_SEND = ""
GMAIL_EMAIL_RECEIVE = ""
GMAIL_EMAIL_PASSWORD = ""

# Google Sheet APIs
GG_SHEET_ID = ""

GG_TYPE = ""
GG_PROJECT_ID = ""
GG_PRIVATE_KEY_ID = ""
GG_PRIVATE_KEY = ""
GG_CLIENT_EMAIL = ""
GG_CLIENT_ID = ""
GG_AUTH_URI = ""
GG_TOKEN_URI = ""
GG_AUTH_PROVIDER_X509_CERT_URL = ""
GG_CLIENT_X509_CERT_URL = ""
GG_UNIVERSE_DOMAIN = ""
```

**Install Packages**

```shell
yarn install
```

**Start project**

```shell
yarn dev
```
