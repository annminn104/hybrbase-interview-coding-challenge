import { IPricingCard } from '@/common/@types';
import { PricingCardEnum } from '../enums';

export const pricingCardMocks: IPricingCard[] = [
  {
    price: 10,
    title: PricingCardEnum.Basic,
    type: PricingCardEnum.Basic,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga sint quia, blanditiis harum excepturi dolorem molestias officia voluptatibus molestiae!'
  },
  {
    price: 35,
    title: PricingCardEnum.Standard,
    type: PricingCardEnum.Standard,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga sint quia, blanditiis harum excepturi dolorem molestias officia voluptatibus molestiae!'
  },
  {
    price: 70,
    title: PricingCardEnum.Premium,
    type: PricingCardEnum.Premium,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga sint quia, blanditiis harum excepturi dolorem molestias officia voluptatibus molestiae!'
  }
];
