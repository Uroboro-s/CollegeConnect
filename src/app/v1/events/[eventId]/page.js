export async function generateMetadata({ params }) {
  // const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${params.eventId}` };
}

function page({ params }) {
  console.log(params);
  return <div>hello</div>;
}

export default page;
