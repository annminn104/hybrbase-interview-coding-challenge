'use client';

import { Grid, Modal, FormControl, TextField, FormHelperText, Button } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { OrderSchemaType, orderSchema } from '@/common/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFormMocks } from '@/common/mocks/order';
import { PricingCardEnum } from '@/common/enums';
import { IPricingCard } from '@/common/@types';
import { ITextField } from '@/global';
import React, { useState } from 'react';
import * as S from './styles';
import envConfig from '@/common/environments';

type PricingModalProps = {
  data: IPricingCard;
  isOpen: boolean;
  onClose: () => void;
  labelledby?: string;
  describedby?: string;
};

export const PricingModal: React.FC<PricingModalProps> = ({
  data,
  isOpen,
  onClose,
  labelledby = 'parent-modal-title',
  describedby = 'parent-modal-description'
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { type } = data;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<OrderSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(orderSchema),
    defaultValues: { type: type, name: '', email: '', phone: undefined, company: undefined }
  });

  const typeFieldsMapping: Record<PricingCardEnum, Partial<Array<ITextField<OrderSchemaType>>>> = {
    [PricingCardEnum.Basic]: orderFormMocks.filter((item) => ['name', 'email'].includes(item.key)),
    [PricingCardEnum.Standard]: orderFormMocks.filter((item) => ['name', 'email', 'phone'].includes(item.key)),
    [PricingCardEnum.Premium]: orderFormMocks.filter((item) => ['name', 'email', 'phone', 'company'].includes(item.key))
  };

  const handleSubmitForm: SubmitHandler<OrderSchemaType> = async (data) => {
    try {
      setIsLoading(true);
      await fetch(`${envConfig?.base.client}/api/order`, { method: 'POST', body: JSON.stringify(data) });
    } catch (error) {
      console.error(error);
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    onClose();
    reset();
  };

  return (
    <React.Fragment>
      <Modal open={isOpen} onClose={handleCloseModal} aria-labelledby={labelledby} aria-describedby={describedby}>
        <S.ModalWrap onSubmit={handleSubmit(handleSubmitForm)} noValidate>
          <Grid container spacing={3}>
            {typeFieldsMapping[type].map((item, index) => (
              <Grid item {...item?.col} key={index}>
                <Controller
                  name={item?.textField.name}
                  control={control}
                  defaultValue=''
                  render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
                    <FormControl fullWidth>
                      <TextField {...item?.textField} inputRef={ref} value={value} onChange={onChange} onBlur={onBlur} error={Boolean(error)} />
                      <FormHelperText sx={{ color: 'error.main', position: 'absolute' }}>{error?.message ?? ''}</FormHelperText>
                    </FormControl>
                  )}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button type='submit' fullWidth variant='contained' disabled={isLoading}>
                Order
              </Button>
            </Grid>
          </Grid>
          {isLoading && <S.ModalProgress size={24} />}
        </S.ModalWrap>
      </Modal>
    </React.Fragment>
  );
};
