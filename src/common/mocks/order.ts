import { ITextField } from '@/global';
import { OrderSchemaType } from '@/common/schemas';

export const orderFormMocks: Array<ITextField<OrderSchemaType>> = [
  {
    key: 'name',
    col: { xs: 12 },
    textField: { name: 'name', id: 'name', autoComplete: 'name', label: 'Name', required: true }
  },
  {
    key: 'email',
    col: { xs: 12 },
    textField: { name: 'email', id: 'email', autoComplete: 'email', label: 'Email', required: true }
  },
  {
    key: 'phone',
    col: { xs: 12 },
    textField: { name: 'phone', id: 'phone', autoComplete: 'phone', label: 'Phone Number', required: true }
  },
  {
    key: 'company',
    col: { xs: 12 },
    textField: { name: 'company', id: 'company', autoComplete: 'company', label: 'Company', required: true }
  }
];
