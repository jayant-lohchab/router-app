import { useParams } from "react-router-dom";

const EventDetailPage = () => {
    const params = useParams();
  return (
    <>
      <h1>This is event detail page</h1>
      <h3>{params.id}</h3>
    </>
  );
};

export default EventDetailPage;
