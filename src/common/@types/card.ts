import { PricingCardEnum } from '@/common/enums';

export interface IPricingCard {
  price: number;
  title: string;
  desc: string;
  type: PricingCardEnum;
}
