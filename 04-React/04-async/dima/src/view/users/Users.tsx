import { useEffect, useState } from "react";
import './Users.scss'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("use Effect");

        getUsers().then((usersDB:any) => {
            setUsers(usersDB);
            console.log(usersDB);
        })
    })

    function getUsers() {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    resolve(json);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    return (
        <div className="Users">
            {users.map((user: any, index) => {
                return <div className="user">
                    <p>{user.name}</p>
                    <p>{user.username}</p>

                </div>
            })}
        </div>
    )
}