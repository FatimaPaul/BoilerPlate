import FInput from "../components/FInput";
import FButton from "../components/FButton";
import FSelect from "../components/FSelect";
import { useState } from "react";
import { fbAdd } from "../config/firebaseMethods";

export default function FDonor() {
  const [donorForm, setDonorForm] = useState({});

  function handleDonorForm() {
    fbAdd("donors", donorForm)
      .then((response) => alert("donor added successfully"))
      .catch((error) => console.log(error));
  }

  function handleSelect(key, val) {
    donorForm[key] = val;
    // console.log(val)
  }

  return (
    <div className="p-5">
      <div className="donor-form">
        <p className="display-6">
          Register As a <span className="text-danger">Donor</span>
        </p>
        <div className="d-form w-50">
          <div className="d-form-inp">
            <FInput
              variant="outlined"
              color="error"
              label="First Name"
              sx={{ width: "45%", marginRight: "20px" }}
              value={donorForm.firstName || ""}
              onchange={(e) =>
                setDonorForm({ ...donorForm, firstName: e.target.value })
              }
            />
            <FInput
              variant="outlined"
              color="error"
              label="last Name"
              sx={{ width: "45%" }}
              value={donorForm.lastName || ""}
              onchange={(e) =>
                setDonorForm({ ...donorForm, lastName: e.target.value })
              }
            />
          </div>

          <div className="d-form-inp">
            <FInput
              variant="outlined"
              color="error"
              label="Address"
              sx={{ width: "93%" }}
              type="email"
              value={donorForm.address || ""}
              onchange={(e) =>
                setDonorForm({ ...donorForm, address: e.target.value })
              }
            />
          </div>

          <div className="d-form-inp d-flex">
            <div className="w-50">
              <FSelect
                selectArray={["male", "female"]}
                label="select Gender"
                color="error"
                stated={(e) => handleSelect("gender", e)}
                value={donorForm.gender || ""}
                onchange={(e) =>
                  setDonorForm({ ...donorForm, gender: e.target.value })
                }
              />
            </div>
            <div className="wid">
              <FSelect
                selectArray={["single", "married"]}
                label="Status"
                color="error"
                stated={(e) => handleSelect("status", e)}
                value={donorForm.status || ""}
                onchange={(e) =>
                  setDonorForm({ ...donorForm, status: e.target.value })
                }
              />
            </div>
          </div>

          <div className="d-form-inp">
            <FSelect
              selectArray={["O", "A", "B", "AB"]}
              label="Select Blood Group"
              color="error"
              sx={{ width: "93%" }}
              stated={(e) => handleSelect("bloodGroup", e)}
              value={donorForm.bloodGroup || ""}
              onchange={(e) =>
                setDonorForm({ ...donorForm, bloodGroup: e.target.value })
              }
            />
          </div>

          <div className="d-form-inp">
            <FSelect
              selectArray={["+", "-"]}
              label="RH Factor"
              color="error"
              sx={{ width: "93%" }}
              stated={(e) => handleSelect("rhFactor", e)}
              value={donorForm.rhFactor || ""}
              onchange={(e) =>
                setDonorForm({ ...donorForm, rhFactor: e.target.value })
              }
            />
          </div>

          <FButton variant="contained" color="error" onclick={handleDonorForm}>
            Submit
          </FButton>
        </div>
      </div>
    </div>
  );
}
