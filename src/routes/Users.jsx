import Axios from 'axios';
import '../style/users.css'
import { useEffect, useState } from 'react';
import { UserContainer } from '../components/usersContainer';

export const Users = () => {
    let [users, setUsers] = useState([]);
    let [searchInput, setSearchInput] = useState("");

    let baseURL = "https://api.github.com/users"

    async function AllUsers() {
        const res = await Axios.get(baseURL);
        // console.log(data);
        setUsers(res.data);
    }

    useEffect(() => {
        AllUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setUsers])

    const formSubmit = (e) => {
        e.preventDefault();
        // console.log("enter pressed");
        // console.log(searchInput);
        // setSearchInput("") 
    }

    async function handleSearch() {
        if (searchInput.length !== 0) {
            setUsers("") //to clear out the users state
            const res = await Axios.get(baseURL + "/" + searchInput);
            console.log(res.data);
            setUsers([res.data]);
        } else {
            AllUsers()
        }
    }

    return (
        <div className='mainDiv'>
            <form className="searchDiv" onSubmit={ formSubmit }>
                <input
                    type="text"
                    placeholder="search github username"
                    className="searchInput"
                    value={ searchInput }
                    onChange={ (e) => setSearchInput(e.target.value) }
                />
                <button className='searchBtn' onClick={ handleSearch } >search</button>
            </form>
            <UserContainer users={ users } />
        </div>
    );
}
