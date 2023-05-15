import Axios from 'axios'
import { useEffect, useState } from 'react';
import { UserContainer } from './usersContainer';

export const Followers = ({ type, baseURL }) => {
    // console.log(type);

    let pathname = window.location.pathname;
    let [followers, setFollowers] = useState([])

    async function getFollowers() {
        const res = await Axios.get(baseURL + pathname + "/" + `${type}`)
        setFollowers(res.data);
    }
    useEffect(() => {
        getFollowers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setFollowers])

    return (
        <div>
            <UserContainer users={ followers } />
        </div>
    );
};

Followers.propTypes
