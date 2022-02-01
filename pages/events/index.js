import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
