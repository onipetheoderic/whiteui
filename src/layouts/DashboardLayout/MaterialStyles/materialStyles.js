import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      width:'100%',
      backgroundColor:'#E5E5E5'
    },
    navOneContainer: {
      width:'6%', 
      backgroundColor:'white',
      borderRight:'1px solid #F0F0F3'
    },
    navTwoContainer: {
      width:'26%', 
      backgroundColor:'white',
      borderRight:'1px solid #F0F0F3'
    },
    logoTextBold: {
      fontSize: 26,
      fontWeight:'700',
      fontFamily: 'Lato'
    },
    logoTextRegular: {
      fontSize: 22,
      fontWeight: '400',
      fontFamily: 'Lato'
    },
    latestTextBold: {
      marginTop:50,
      fontSize: 16,
      color: '#1C1D21',
      fontWeight: '700',
      fontFamily: 'Lato'
    },
    imageContainer: {
      marginTop:100,
      marginLeft:30
    },
    bgImage: {
      alignSelf:'center'
    },
    bgLogo: {
     width:'100%'
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
    dashChartContainer: {
      display:'flex',
      flexWrap: 'wrap',
      marginTop: 30,
      width:'32%',
      borderRadius: 6,
      backgroundColor:'white',
      height: 400,
    },
    mainChartContainer: {
      display:'flex',
      flexWrap: 'wrap',
      marginTop: 30,
      width:'66%',
      borderRadius: 6,
      backgroundColor:'white',
      height: 400
    },
    boxContainer: {
      display:'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      marginLeft:30,
      marginTop: 30,
      width:'96.5%',
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
      height:'70%',
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