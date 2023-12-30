const page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return (
    <div>
      <h1>Upcoming Projects / travelcrafter / {params.slug} </h1>
    </div>
  );
};

export default page;
