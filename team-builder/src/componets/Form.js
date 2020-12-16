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
      <div>
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Type a name"
            value={values.name}
            onChange={onChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Type an email"
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>
          Role
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">------select role------</option>
            <option value="Demolitions">Demolitions</option>
            <option value="Procurement">Procurement</option>
            <option value="Leader">Leader</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
