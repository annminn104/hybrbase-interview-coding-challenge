import { pricingCardMocks } from '@/common/mocks';
import { PricingCard } from '@/components/pricing';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Grid container spacing={3}>
      {pricingCardMocks.map((card, index) => (
        <Grid item xs={12} md={4} key={index}>
          <PricingCard item={card} />
        </Grid>
      ))}
    </Grid>
  );
}
