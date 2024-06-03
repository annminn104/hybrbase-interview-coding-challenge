import { OrderSchemaType } from '@/common/schemas';

export class TemplateUtils {
  static emailSend = (data: OrderSchemaType) => {
    return `<div style="font-size: 20px;">
      <div>Hi <span style="font-weight: 600;">${data.name}</span> </div>
      <div>Thank you for successfully ordering the <span style="font-weight: 600;">${data.type}</span> service package from <span style="font-weight: 600;">HYBRBASE</span></div>
      <div>We will check and update your order status continuously. Please check your email regularly</div>
      <div>Thanks.</div>
    </div>`;
  };
}
