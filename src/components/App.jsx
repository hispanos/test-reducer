import React, { useReducer, useState } from 'react'
import { addUser } from '../actions/actionsUsers'
import { reducerUsers } from '../reducers/reducerUsers'

const App = () => {

    
    const initialUsers = [
        {
            name: 'Pedro',
            age: 18
        }
    ]

    const [stateUsers, dispatchUsers] = useReducer(
        reducerUsers,
        initialUsers
    )

    const [form, setForm] = useState({
        name: '',
        age: ''
    })

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchUsers(addUser(form))
    }


    return (
        <>
            <div>App</div>
            <ul>
                {
                    stateUsers.map((user, index) => (
                        <li key={index}>{user.name} - {user.age}</li>
                    ))
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Nombre'
                    value={form.name}
                    onChange={handleChange}
                    name='name'
                />
                <input
                    type="number"
                    placeholder='Edad'
                    value={form.age}
                    onChange={handleChange}
                    name='age'
                />
                <button type='submit'>Guardar</button>
            </form>
        </>
    )
}

export default App