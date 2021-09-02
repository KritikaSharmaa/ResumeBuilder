import { useSelector } from "react-redux";

const Preview = () => {
  let { Fname, Lname, ProfSum, Email, Phone, City, State, Country, Pincode } =
    useSelector((state) => state.personalDetails);
  let {
    CollegeName,
    Degree,
    Year,
    Cgpa,
    Sname12,
    Sname12Year,
    Sname12Board,
    Sname12Per,
    Sname10,
    Sname10Year,
    Sname10Board,
    Sname10Per,
  } = useSelector((state) => state.Education);
  //let skillObj = useSelector((state) => state.Skills);
  //let Projects = useSelector((state) => state.Projects);

  let state = useSelector((state) => state.Achievements);

  return (
    <>
      <div className="h-screen w-full bg-pink-700 text-white font-semibold flex flex-col">
        <span>{Fname}</span>
        <span>{Lname}</span>
        <span>{ProfSum}</span>
        <span>{Email}</span>
        <span>{Phone}</span>
        <span>{City}</span>
        <span>{State}</span>
        <span>{Country}</span>
        <span>{Pincode}</span>
        <span>
          {CollegeName},{Degree},{Year},{Cgpa},{Sname12},{Sname12Year},
          {Sname12Board},{Sname12Per},{Sname10},{Sname10Year},{Sname10Board},
          {Sname10Per}
        </span>
      </div>
    </>
  );
};
export default Preview;
