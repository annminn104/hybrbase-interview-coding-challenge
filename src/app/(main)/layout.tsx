import { Container, Typography } from '@mui/material';

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <main>
        <Typography variant='h1' color='primary' textAlign='center' fontWeight='bold' sx={{ mb: 2 }}>
          HYBRBASE
        </Typography>
        {children}
      </main>
    </Container>
  );
}
