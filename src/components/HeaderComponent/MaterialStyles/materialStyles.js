import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mobileContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent:'center',
    },  

  },
    headerText: {
      fontFamily: 'Lato',
      fontSize: 32,
      fontWeight: '700',
      [theme.breakpoints.down('sm')]: {
        display:'none'
      },  
    },
    mobileView: {
      fontFamily: 'Lato',
      fontSize: 28,
      fontWeight: '700',
      color:'white',
      paddingTop:'35%',
      [theme.breakpoints.up('sm')]: {
        display:'none',
       
      },  
    }
}));

     