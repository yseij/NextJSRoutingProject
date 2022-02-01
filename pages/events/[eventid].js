import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAllert from "../../components/ui/error-alert";

function EventDetailPage() {
  const router = useRouter();

  router.query.eventId;

  const eventId = router.query.eventid;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAllert>
        <p>No event found!</p>
      </ErrorAllert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
