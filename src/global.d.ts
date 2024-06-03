import { TextFieldProps } from '@mui/material';

export declare interface ITextField<T> {
  key: string;
  col: { xs: number };
  textField: TextFieldProps & {
    name: typeof T;
  };
}

export interface EmailTypeRequest {
  from: string;
  to: string;
  subject: string;
  html: string;
}
