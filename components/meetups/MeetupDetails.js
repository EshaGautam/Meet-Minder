import React from 'react'
import classes from './MeetupDetails.module.css';
import Card from '../ui/Card';

const MeetupDetails = (props) => {
  return (
    <Card>
        <img src={props.image} className={classes.image}></img>
        <h2 className={classes.content}>{props.title}</h2>
        <h4 className={classes.content}>{props.address}</h4>
        <p className={classes.para} >{props.description}</p>
    </Card>
  )
}

export default MeetupDetails