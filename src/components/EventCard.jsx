import ViewEvent from '../ViewEvent';

const EventCard = ({ event }) => {
  return (
    <>
      <ViewEvent event={event} reducedView={true} />
    </>
  )
}

export default EventCard;