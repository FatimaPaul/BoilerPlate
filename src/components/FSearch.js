import FButton from "../components/FButton";

export default function FSearch({ value, onchange, onclick }) {
  return (
    <div>
      <span className="search w-50 mb-4">
        <input
          type="search"
          className="inp-search"
          placeholder="search your blood group here...."
          value={value}
          onChange={onchange}
        />
        <FButton variant="contained" color="error" onclick={onclick}>
          Search
        </FButton>
      </span>
    </div>
  );
}
