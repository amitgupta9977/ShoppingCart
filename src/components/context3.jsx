import D from "./D";

const C = ({ uName, uCity }) => {
  return (
    <>
      <p>C</p>
      <D uName={uName} uCity={uCity} />
    </>
  );
};

export default C;