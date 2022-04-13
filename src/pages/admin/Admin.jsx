import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from "./Admin.module.css"

const Admin = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [passwordType, setPasswordType] = useState(false)

    const rout = useNavigate();


    const submit = (e) => {
        e.preventDefault();
        // TODO: add login logic
        rout("/dashboard")
    }
    const handleChange = (e) => {
        setLogin(e.target.value)
    }
    const passChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className='container mt-5 mb-5'>
            <form onSubmit={submit} className={css.formWrapper}>
                <input
                    required
                    value={login}
                    type="text"
                    placeholder="Login"
                    onChange={handleChange}
                />
                <input
                    required
                    value={password}
                    type={passwordType ? "text" : "password"}
                    placeholder="Password"
                    onChange={passChange}
                />
                <div className={css.btn} onClick={() => setPasswordType(!passwordType)}>Show</div>
                <button>Enter</button>
            </form>
        </div>
    );
}

export default Admin;
