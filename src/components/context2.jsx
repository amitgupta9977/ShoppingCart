import C from "./C";

const B = ({ uName, uCity }) => {
  return (
    <>
      <p>B</p>
      <C uName={uName} uCity={uCity} />
    </>
  );
};

export default B;