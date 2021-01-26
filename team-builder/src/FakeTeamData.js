import { v4 as uuid } from "uuid";

//Fake Team Data List

const initialTeamList = [
  {
    id: uuid(),
    name: "Sutherland",
    email: "Sutherland@mail.com",
    role: "Researcher",
  },
  {
    id: uuid(),
    name: "Deckert",
    email: "Deckert@mail.com",
    role: "Administration",
  },
  {
    id: uuid(),
    name: "Sanderson",
    email: "Sanderson@mail.com",
    role: "Security",
  },
  { id: uuid(), name: "Dundee", email: "Dundee@mail.com", role: "Field Agent" },
];

export default initialTeamList;
