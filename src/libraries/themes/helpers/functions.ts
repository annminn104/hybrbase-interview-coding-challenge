import { AlignItems, Display, FlexDirection, JustifyContent } from '../mui-theme';

export enum StyleBaseEnum {
  fontSizeDefault = 16
}

export enum StyleBreakPointEnum {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400,
  xxxl = 1600
}

export enum StyleBreakPointDeviceEnum {
  mobile = StyleBreakPointEnum.xs,
  tablet = StyleBreakPointEnum.md,
  desktop = StyleBreakPointEnum.xl,
  small = StyleBreakPointEnum.sm,
  medium = StyleBreakPointEnum.lg,
  large = StyleBreakPointEnum.xl
}

const pxToRem = (pixel: number, defaultFontSizeHtml: number = StyleBaseEnum.fontSizeDefault) => {
  return `${pixel / defaultFontSizeHtml}rem`;
};

const responsiveFontSizes = (sm: number, md: number, lg: number) => {
  return {
    [`@media(min-width:${StyleBreakPointDeviceEnum.small}px)`]: {
      fontSize: pxToRem(sm)
    },
    [`media(min-width:${StyleBreakPointDeviceEnum.medium}px)`]: {
      fontSize: pxToRem(md)
    },
    [`media(min-width:${StyleBreakPointDeviceEnum.large}px)`]: {
      fontSize: pxToRem(lg)
    }
  };
};

const adjustFlex = (
  display: Display = 'flex',
  flexDirection: FlexDirection = 'row',
  justifyContent: JustifyContent = 'center',
  alignItems: AlignItems = 'center'
) => {
  return { display, flexDirection, justifyContent, alignItems };
};

export { adjustFlex, pxToRem, responsiveFontSizes };
