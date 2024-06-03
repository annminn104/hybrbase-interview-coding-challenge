import { z } from 'zod';

export const orderSchema = z.object({
  type: z.string().min(1, { message: 'Type is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email('Please specify a valid email'),
  phone: z.string().min(1, { message: 'Phone is required' }).optional(),
  company: z.string().min(1, { message: 'Message is required' }).optional()
});

export type OrderSchemaType = z.infer<typeof orderSchema>;
