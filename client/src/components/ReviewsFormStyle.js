import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    justify: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width:'60rem',
    backgroundColor: '#ffffff',
    margin: '15px',

    boxShadow: '0 6px 20px rgba(56, 125, 255, 0.17)',
    webkitFilter: 'drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))',
    filter: 'drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))',
    borderRadius: '10px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0.5rem',
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
  breakpoints: {
    sm: '0px',
    md: '600px',
    lg: '1000px',
  },
  [theme.breakpoints.up('sm')]: {
    paper: {
      width: '20rem',
    }
  },
  [theme.breakpoints.up('md')]: {
    paper: {
      width: '40rem',
    }
  },
  [theme.breakpoints.up('lg')]: {
    paper: {
      width: '60rem',
    }
  },
}));