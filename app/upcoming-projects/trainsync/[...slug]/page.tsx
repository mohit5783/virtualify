const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Upcoming Projects / trainsync / {params.slug} </h1>
    </div>
  );
};

export default page;
