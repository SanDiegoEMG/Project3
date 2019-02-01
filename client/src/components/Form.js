import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Search for a Mushroom</strong>
        </label>
        <input
          className="form-control"
          id="Species"
          type="text"
          value={q}
          placeholder="Choose a Species from list below"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search </button>
      </div>
    </form>
  );
}

export default Form;


