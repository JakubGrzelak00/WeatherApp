const Input = ({ onSearch, city, onChange }) => {
  return (
    <div className="input-group" style={{ widht: "40%", marginTop: "5%" }}>
      <input
        type="text"
        className="form-control"
        placeholder="City"
        value={city}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => onSearch()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Input;
