# HYBRBASE - INTERVIEW - TECHNICAL - CHALLENGE

## Demo

- WEB: [https://hybrbase-interview-coding-challenge.vercel.app](https://hybrbase-interview-coding-challenge.vercel.app)
- Google Sheet: [Link](https://docs.google.com/spreadsheets/d/1e1Xzm_i1yTutdFS-oEaMW_J7bhWKaUn_1ljOqVN4Kqk/edit?usp=sharing)
- Video Demo: [Link](https://drive.google.com/file/d/11lcvTvTX_MzPiPf0b58eGI1QoxcLIPmt/view)

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
NEXT_PUBLIC_GMAIL_EMAIL_SEND = ""
NEXT_PUBLIC_GMAIL_EMAIL_PASSWORD = ""

# Google Sheet APIs
NEXT_PUBLIC_GG_SHEET_ID = ""

NEXT_PUBLIC_GG_TYPE = ""
NEXT_PUBLIC_GG_PROJECT_ID = ""
NEXT_PUBLIC_GG_PRIVATE_KEY_ID = ""
NEXT_PUBLIC_GG_PRIVATE_KEY = ""
NEXT_PUBLIC_GG_CLIENT_EMAIL = ""
NEXT_PUBLIC_GG_CLIENT_ID = ""
NEXT_PUBLIC_GG_AUTH_URI = ""
NEXT_PUBLIC_GG_TOKEN_URI = ""
NEXT_PUBLIC_GG_AUTH_PROVIDER_X509_CERT_URL = ""
NEXT_PUBLIC_GG_CLIENT_X509_CERT_URL = ""
NEXT_PUBLIC_GG_UNIVERSE_DOMAIN = ""
```

**Install Packages**

```shell
yarn install
```

**Start project**

```shell
yarn dev
```

.
