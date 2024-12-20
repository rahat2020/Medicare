import SingleDoctor from "@/components/Doctors/SingleDoctor";

const SingleDoctorPage = ({ params }) => {
  const { id } = params;
  return <SingleDoctor id={id} />;
};

export default SingleDoctorPage;
