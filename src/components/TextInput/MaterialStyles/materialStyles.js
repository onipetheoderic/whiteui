import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    textField: props => ({
      width: '100%',
      fontFamily: props.MainFont,
      fontWeight: props.MainWeight,
    }),
    labelRoot: props => ({
      fontFamily: props.MainFont,
      fontSize: props.SubText,
      fontWeight: props.MainWeight,
      color: props.Deluge, 
    })
}));

     