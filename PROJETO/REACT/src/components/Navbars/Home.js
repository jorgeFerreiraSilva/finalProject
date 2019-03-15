import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Explore from '@material-ui/icons/Explore';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


const styles = theme => ({
  header: {
    height: '80px',
    color: '#484848',
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: '1px solid #e2e2e2'
  },
  mainIcon: {
    fontSize: '40px',
    color: '#f44336'
  },
  toolbar: {
    height: '80px'
  },
  grid: {
    display: 'flex',
    alignItems: 'center'
  },
  root: {
    width: '100%'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  magnifyingGlass: {
    fontWeight: 800,
    color: 'black'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px',
    position: 'relative',
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(235, 235, 235)',
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
      width: 'auto'
    }
  },
  searchIcon: {
    width: '50px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: '12px',
    paddingRight: '8px',
    paddingBottom: '12px',
    paddingLeft: '50px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 350
    },
    '&::placeholder': {
      color: 'black',
      fontWeight: 600
    }
  },
  menubuttons: {
    fontWeight: 600
  }
});

class HomeNav extends React.Component {
  constructor() {
    super();
    this.state = {
      search: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = prop => event => {
    this.props.updateState(event.target.value);
  };

  render() {
    console.log(this.state.search);

    const { classes } = this.props;

  }
}
HomeNav.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(HomeNav);
