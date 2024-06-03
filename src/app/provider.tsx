'use client';

import { MuiReactProvider } from '../libraries/themes/';
import React from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface RootProviderProps {
  children?: React.ReactNode;
}

const { fontFamily, ...interStyle } = inter.style;

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <MuiReactProvider
      defaultMode='light'
      themeOptions={{
        typography: {
          fontFamily: fontFamily
        }
      }}
    >
      {children}
    </MuiReactProvider>
  );
};

export default RootProvider;
