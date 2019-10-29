import React from 'react'
import { Card } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';




function UserCard(props){


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: "yellow",
    border: "3px solid blue",
    zIndex: 2147483647,
    flexWrap: 'nowrap',
    flexDirection: "row",
    alignContent: "flex-start"
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 76,
  },
  pos: {
   
    marginBottom: 12,
  }
});

    const classes = useStyles();
   

console.log(props.percentageChange24HrUsd)
    return(
        <Card display="flexbox" className={classes.card}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" alt="ticker symbol">
        {props.symbol}
      </Typography>
          <Typography gutterBottom variant="h5" component="h2" alt="displaying the current price in US dollars">
          {props.priceUsd ? '$' + props.priceUsd.toFixed(2): null}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.percentageChange24HrUsd ? props.percentageChange24HrUsd > 0 ? '+' + props.percentageChange24HrUsd.toFixed(2) + '%' : props.percentageChange24HrUsd.toFixed(2) + '%' : null}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )


}

export default UserCard
