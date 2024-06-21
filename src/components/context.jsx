import { useState } from "react";
import B from "./B";

const AComp = () => {
  const [uName, setUName] = useState("");
  return (
    <>
      <p>A</p>
      <input value={uName} onChange={(e) => setUName(e.target.value)} />
      <B uName={uName} uCity="jabalpur" />
    </>
  );
};

export default AComp;