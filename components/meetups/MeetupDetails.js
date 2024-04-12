import React from 'react'
import classes from './MeetupDetails.module.css';
import Card from '../ui/Card';

const MeetupDetails = (props) => {
  return (
    <Card key ={props.meetupData.id}>
        <img className={classes.image} src={props.meetupData.image}></img>
        <h2 className={classes.content}>{props.meetupData.title}</h2>
        <h4 className={classes.content}>{props.meetupData.address}</h4>
        <p className={classes.para} >{props.meetupData.description}</p>
    </Card>
  )
}



export default MeetupDetails