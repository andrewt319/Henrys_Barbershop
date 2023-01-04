import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {

},
  paper: {
    padding: theme.spacing(2),
    justify: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width:'40rem',
    boxShadow: '2px 2px 30px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    margin: '15px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: '10',
    backgroundColor: '#000000',
    marginTop: '40px',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#000000',
    },
  },
  box2: {
    top: '10px',
  },
  label: {
    top: '20px',

  },
  box3: {
    top: '20px',
  },
  box4: {
    top: '30px'
  },
}));