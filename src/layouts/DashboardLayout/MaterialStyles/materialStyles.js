import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      width:'100%',
      backgroundColor:'#E5E5E5'
    },
    navOneContainer: {
      width:'7%', 
      backgroundColor:'white',
      borderRight:'1px solid #F0F0F3'
    },
    navTwoContainer: {
      width:'27%', 
      backgroundColor:'white',
      borderRight:'1px solid #F0F0F3'
    },
    bgImage: {
      alignSelf:'center'
    },
    iconStyleDashboard: {
      alignItems:'center'
    },
    iconDashboardText: {
      color:'#8181A5',
      fontSize:20,
      borderRadius:5,
      padding:10,
      backgroundColor:'#dfdff1'
    },
    iconBox: {
      width:'50%',
      alignSelf:'center',
      marginLeft:'auto',
      marginRight:'auto',
      height:50,
      borderRadius:8,
      border:'1px solid blue'
      
    },
    boxOutline: {
      borderRight: '2px solid #5E81F4',
      borderRadius:1,
      height: 52,
      width:'100%'
    },
    iconsContainer:{
      display:'flex',
      flexWrap:'wrap',
      height:'100%',
      marginTop:50
    },
    logoContainer: {
      width:'100%', 
      display:'flex', 
      paddingTop:30, 
      justifyContent:'center', 
      alignItems:'center'
    },
    navBar1: {
      width:'100%', 
      height:'100%', 
      backgroundColor:'white',
    },
    navBar2: {
      width:'100%', 
      height:'100%', 
      backgroundColor:'white'
    },
    navBar3: {
      width:'100%', 
      height:'100%', 
      backgroundColor:'red'
    },
    childStyle: {
      position: 'relative',
      width: '50%',
      backgroundColor:'yellow',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height:'50%',
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