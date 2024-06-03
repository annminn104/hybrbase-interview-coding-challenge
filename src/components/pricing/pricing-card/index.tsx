'use client';

import { PricingModal } from '../pricing-modal';
import { IPricingCard } from '@/common/@types';
import { useState } from 'react';
import React from 'react';
import * as S from './styles';

type PricingCardProps = {
  item: IPricingCard;
  currency?: string;
};

export const PricingCard: React.FC<PricingCardProps> = ({ item, currency = 'USD' }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { title, desc, price, type } = item;

  const formatMoney = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  });

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <React.Fragment>
      <S.CardWrap>
        <S.CardTitle color='primary' variant='h5'>
          {title}
        </S.CardTitle>
        <S.CardPrice variant='body1'>{formatMoney.format(price)}</S.CardPrice>
        <S.CardDesc variant='body2'>{desc}</S.CardDesc>
        <S.CardButton variant='contained' fullWidth onClick={handleOpenModal}>
          Order Now
        </S.CardButton>
      </S.CardWrap>
      <PricingModal isOpen={isOpenModal} onClose={handleCloseModal} data={item}></PricingModal>
    </React.Fragment>
  );
};
