import React, {  Component} from 'react';
import axios from 'axios'


import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';



import UserCard from "../Molecules/UserCard";



//////////////////////////////////Material UI//////////////////////////

const style = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)'
  },
}));



////////////////////////Exported Component//////////////////

class UserList extends Component {
    state ={
        displayInfo: []
    }



  componentDidMount(){
    axios.get(`https://api.github.com/users/CJLucido`)
    .then(res => {
      console.log("this is from UserList", res);
      this.setState({
          displayInfo: res.data
      })
    })
    .catch(err => {
      console.log("Did not receive data from API call", err)
    })
  }


render(){

    let  {classes } = this.props;
console.log(classes) 
console.log("this is displayInfo.name", this.state.displayInfo.name)
    return(
        <div className={classes.root}>
       
            <GridList className={classes.gridList} cols={3}>
            {
              
               <UserCard key={this.state.displayInfo.name} name={this.state.displayInfo.name}/>
              
            
             }
            
             </GridList>


        </div>
    )}
}

export default withStyles(style)(UserList)



//this.state.displayInfo.map(  (display, index) =>
// (
//     ) map wont work because.....it's not an array!