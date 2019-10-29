import React from 'react'
import { Card } from '@material-ui/core';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




      

class UserCard extends React.Component {


render(){
    console.log("this is this.props.name", this.props.name)
   

    console.log('this is the avatar image', this.props.avatar)
    return(
        <Card display="flexbox" >
      <CardActionArea>
            <CardMedia
     
        src={`${this.props.avatar}`}
        title="Avatar Image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" alt="User Name">
        {this.props.name}
      </Typography>
          <Typography gutterBottom variant="h5" component="h2" alt="Type of User">
          {this.props.type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" alt="Number of Public Repos">
            {this.props.repos}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" alt="User Url">
          {this.props.url}
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )

    }
}

export default UserCard



// const style = makeStyles({
//     card: {
//       maxWidth: 345,
//       backgroundColor: "yellow",
//       border: "3px solid blue",
//       flexWrap: 'nowrap',
//       flexDirection: "row",
//       alignContent: "flex-start"
//     },
//     media: {
//       height: 140,
//     },
//     title: {
//       fontSize: 76,
//     },
//     pos: {
//       marginBottom: 12,
//     }
//   });
  
      

// class UserCard extends React.Component {


// render(){
//     console.log("this is this.props.name", this.props.name)
//     let {classes} = this.props

//     console.log('this is the avatar image', this.props.avatar)
//     return(
//         <Card display="flexbox" className={classes.card}>
//       <CardActionArea>
//             <CardMedia
//         className={classes.media}
//         src={`${this.props.avatar}`}
//         title="Avatar Image"
//         />
//         <CardContent>
//         <Typography gutterBottom variant="h5" component="h2" alt="User Name">
//         {this.props.name}
//       </Typography>
//           <Typography gutterBottom variant="h5" component="h2" alt="Type of User">
//           {this.props.type}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p" alt="Number of Public Repos">
//             {this.props.repos}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p" alt="User Url">
//           {this.props.url}
//         </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//     )

//     }
// }

// export default withStyles(style)(UserCard)