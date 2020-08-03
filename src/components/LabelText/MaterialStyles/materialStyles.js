import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    aligner: {
      alignItems:'center',
      height: 35,
    },
    headerText: props => ({
      fontFamily: props.MainFont,
      fontSize: props.SubText,
      fontWeight: props.SubWeight,
      color: props.Deluge,
      justifyContent:'center',
      alignSelf:'center',
      lineHeight: 3,
      [theme.breakpoints.down('sm')]: {
       textAlign:'center',
       marginTop: -16,
       fontSize: 14,
       color:'white'
      },  
    
    })
      }));

     