import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "E1", title: "First Event" },
  { id: "E2", title: "Second Event" },
  { id: "E3", title: "Third Event" },
];

const EventPage = () => {
  return (
    <>
      <h1>This is Events Page</h1>
      <main>
        <ul>
          {DUMMY_EVENTS.map((event) => (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default EventPage;
