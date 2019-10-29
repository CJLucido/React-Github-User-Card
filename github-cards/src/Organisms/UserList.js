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
    backgroundColor: "yellow",
  },
  gridList: {
    width: 500,
    height: 450,
    // transform: 'translateZ(0)'
  },
}));



////////////////////////Exported Component//////////////////

class UserList extends Component {
    state ={
        displayInfo: [],
        followersDisplayInfo: []
    }



  componentDidMount(){
    axios.get(`https://api.github.com/users/CJLucido`)
    .then(res => {
      console.log("this is from UserList", res);
      this.setState({
          displayInfo: res.data,
          
      })
    })
    .catch(err => {
      console.log("Did not receive data from API call", err)
    })

    axios.get(`https://api.github.com/users/CJLucido/followers`)
    .then(res =>
      {
          console.log("this is followers", res.data)
          this.setState({followersDisplayInfo: res.data})
      })
  }


render(){

    let  {classes } = this.props;
console.log(classes) 
console.log("this is displayInfo.name", this.state.displayInfo.name)
    return(
        
        <div className={classes.root}>
       
        <GridList className={classes.gridList} cols={3}>
            <h1>Github User</h1>
            {
               <UserCard 
               key={this.state.displayInfo.name}
                name={this.state.displayInfo.name}
                type={this.state.displayInfo.type}
                 repos={this.state.displayInfo.public_repos}
                 url={this.state.displayInfo.url}
                 avatar={this.state.displayInfo.avatar_url}
                 />
             }
             <h1>User's Followers</h1>
               {this.state.followersDisplayInfo.map(item => 
            <UserCard 
                key={item.login}
                name={item.login}
                url={item.url}
                avatar={item.avatar_url} />
               )}
             </GridList>


        </div>
    )}
}

export default withStyles(style)(UserList)

// export default withStyles(style)(UserList)

//<div className={classes.root}>
//<GridList className={classes.gridList} cols={3}>

//this.state.displayInfo.map(  (display, index) =>
// (
//     ) map wont work because.....it's not an array!

// console.log("this is from Followers URL", res.data[0].login);

//console.log("this is the item you are looking for", item)