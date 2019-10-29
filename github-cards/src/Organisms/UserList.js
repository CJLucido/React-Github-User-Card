import React, {useState, useEffect, Fragment, Component} from 'react';
import axios from 'axios'


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';



import UserCard from "../Molecules/UserCard";



//////////////////////////////////Material UI//////////////////////////

const useStyles = makeStyles(theme => ({
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

function UserList(props){
    const [displayInfo, setDisplayInfo] = useState([])

    const classes = useStyles();









  useEffect(() => {
    axios.get(`https://api.github.com/users/CJLucido`)
    .then(res => {
      console.log("this is from UserList", res);
    })
    .catch(err => {
      console.log("Did not receive data from API call", err)
    })
  }, [])



    return(
        <div className={classes.root}>
       
            <GridList className={classes.gridList} cols={3}>
            {
            
            
              displayInfo.map(  (display, index) =>
              (
               <UserCard key={index} />)
              )
            
             }
            
             </GridList>


        </div>
    )
}

export default UserList



