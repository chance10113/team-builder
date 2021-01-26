import React from "react";

export default function TeamBuildForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div classname="form-inputs">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Input Name"
            value={values.name}
            onChange={onChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Input Email"
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>
          Role
          <select name="role" value={values.role} onChange={onchange}>
            <option value="">---Select Role ---</option>
            <option value="researcher"> Researcher </option>
            <option value="security"> Security </option>
            <option value="administration"> Administration </option>
            <option value="fieldAgent"> Field Agent </option>
            <option value="maintenance"> Maintenance</option>
          </select>
        </label>

        <div className="submit-btn">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
