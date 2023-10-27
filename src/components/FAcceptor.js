import { useEffect } from "react";
import { fbGet } from "../config/firebaseMethods";
import { useState } from "react";
import FTable from "../components/FTable";
import FSearch from "../components/FSearch";

export default function FAcceptor() {
  const [donorArray, setDonorArray] = useState([]);
  const [SearchVal, setSearchVal] = useState("");

  useEffect(function () {
    fbGet("donors")
      .then((response) => setDonorArray([...Object.values(response)]))
      .catch((error) => console.log(error));
  }, []);

  function handleSearch() {}

  return (
    <div className="p-3 w-75">
      <FSearch
        value={SearchVal}
        onchange={(e) => setSearchVal(e.target.value)}
        onclick={handleSearch}
      />
      {!SearchVal ? (
        <FTable
          headArray={[
            "First Name",
            "Last Name",
            "Address",
            "Blood Group",
            "RH Factor",
            "Status",
            "Gender",
          ]}
          align="left"
          bodyArray={donorArray}
        />
      ) : (
        ""
      )}
    </div>
  );
}
