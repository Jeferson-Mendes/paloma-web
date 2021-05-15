import React from 'react';

import { ButtonBase , makeStyles,Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo-2.svg';

const images = [
    {
      url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      title: 'Administrador',
      width: '40%',
    },
    {
      url: 'https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'Cliente',
      width: '40%',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      marginTop: 8,
      alignItems:'center',
      justifyContent:'center',
    },
    image: {
      position: 'relative',
      margin: 2,
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 200,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      fontSize: 20,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

const Landing: React.FC = () => {
    const classes = useStyles();

    const history = useHistory()

    const handleAdmClick = () => {
        history.push('/login')
    }

    const handleCustomeClick = () => {
        history.push('/home')
    }

    return (
        <div id="choose-user-container">
            <div className="logo-choose">
                <img src={logo} alt="logo" />
            </div>
            <h2 className="welcome-title">Seja bem vindo!</h2>
            <p className="choose-text">Como deseja entrar?</p>
            <div className={classes.root}>
            <ButtonBase
                    focusRipple
                    onClick={handleAdmClick}
                    key={images[0].title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: images[0].width,
                    }}
                    >
                    <span
                        className={classes.imageSrc}
                        style={{
                        backgroundImage: `url(${images[0].url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                        >
                        {images[0].title}
                        <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                    </ButtonBase>

                    <ButtonBase
                    focusRipple
                    onClick={handleCustomeClick}
                    key={images[1].title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: images[1].width,
                    }}
                    >
                    <span
                        className={classes.imageSrc}
                        style={{
                        backgroundImage: `url(${images[1].url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                        >
                        {images[1].title}
                        <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                    </ButtonBase>
            </div>
        </div>
    )
}

export default Landing;