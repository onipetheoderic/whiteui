import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative'
    },
    childStyle: {
      position: 'relative',
      width: '50%',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height:'50%',
      },  
    },
    bgImage: {
        width:'100%',
        height:'100%',
        [theme.breakpoints.down('sm')]: {
          display:'none'
        },  
    },
    playGroundStyle: {
        position: 'absolute',
        width: '60%',
        height: '100%',
        backgroundColor: 'white',
        borderTopRightRadius:16,
        borderBottomRightRadius: 16,
        [theme.breakpoints.down('sm')]: {
         display:'none'
        },  
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      [theme.breakpoints.down('sm')]: {
        display:'none'
      },  
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));