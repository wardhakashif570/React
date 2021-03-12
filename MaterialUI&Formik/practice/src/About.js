import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    margintop:0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6' align="center">About Us </Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
        Online Boutique offers a wide range of apparel to fit any woman’s unique sense of style. Our clothing and accessories are
                             carefully curated to provide our customers the latest fashions. To keep our customers in style we post new arrivals daily, as 
                             well as offer stylist picks to help any indecisive shoppers. Impressions Online Boutique is a fashionista’s best place to create
                             the perfect wardrobe.Beyond helping you look your best, Impressions Online Boutique strives to make every purchase a positive 
                             experience. Our top priorities are excellent customer service, exceptionally quick order processing, ultra fast shipping times,
                             and a hassle-free return policy. We value your feedback, whether positive or constructive and we are continuously working to 
                             improve your experience.If you are a first-time visitor or long-standing customer, we hope you will be thrilled with every aspect of your Impressions Online Boutique shopping experience
        </Typography>
      </div>
    </main>
  );
}

export default About;