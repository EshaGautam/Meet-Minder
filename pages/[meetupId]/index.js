import React from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const Details = (props) => {
  return (
    <MeetupDetails meetupData={props.meetupData} />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
      { params: { meetupId: 'm3' } }
    ]
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'photo-1471039497385-b6d6ba609f9c.avif',
        title: 'FIRST MEETUP',
        address: 'xyz-street',
        description: 'join us!'
      }
    }
  };
}

export default Details;
