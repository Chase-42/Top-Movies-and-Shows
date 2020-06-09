import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright Chase Collins © '}
      <Link
        color='inherit'
        href='https://chasecollins.tech/'
        target='_blank'
        rel='noreferrer'
      >
        chasecollins.tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth='xs'>
          <Box display='flex'>
            <Box mb={1}>
              <Link
                component={RouterLink}
                to='#'
                underline='none'
                color='inherit'
              >
                <FacebookIcon style={{ fontSize: 35 }} />
              </Link>
            </Box>
            <Box mb={1} ml={14}>
              <Link
                component={RouterLink}
                to='#'
                underline='none'
                color='inherit'
              >
                <TwitterIcon style={{ fontSize: 35 }} />
              </Link>
            </Box>
            <Box mb={1} ml={13}>
              <Link
                component={RouterLink}
                to='#'
                underline='none'
                color='inherit'
              >
                <InstagramIcon style={{ fontSize: 35 }} />
              </Link>
            </Box>
          </Box>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}
