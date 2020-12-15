import {v4 as uuid} from 'uuid'

// //This is where we creatae the fake Team List, because that seems to be what we need to do maybe?

const initialTeamList = [
    { id: uuid(), name: 'Sue', email: 'Sue@mail.com', role: 'Instructor'},
    { id: uuid(), name: 'Dan', email: 'Dan@mail.com', role: 'Student'},
    { id: uuid(), name: 'Sal', email: 'Sal@mail.com', role: 'TL'},
    { id: uuid(), name: 'Dib', email: 'Dib@mail.com', role: 'Student'},
]

export default  initialTeamList

// //Gotta sim the Axios get and post!

// export default {
//     get() {
//         return Promise.resolve({ status: 200, sucess: true, data: initialTeamList})
//     },
//     post(url, {name, email, role}) {
//         const newTeamMate = { id: uuid(), name, email, role }
//         return Promise.resolve({ status: 200, success: true, data: newTeamMate})
//     }
// }