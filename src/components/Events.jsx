import '../style/events.css'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Events = ({ type, baseURL }) => {
    // console.log(type);

    let pathname = window.location.pathname;
    let [events, setEvents] = useState([])

    let [url, setURL] = useState("");

    async function getEvents() {
        const res = await Axios.get(baseURL + pathname + "/" + `${type}`)
        setEvents(res.data);
    }
    useEffect(() => {
        getEvents()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setEvents, url])


    return (
        <div className="eventsMainDiv">
            {
                events && events?.map((data, key) => {
                    async function handleClick() {
                        // const res = await Axios.get(baseURL + "/" + data.actor.login);
                        // console.log(res.data);
                        setURL(baseURL + "/" + data.actor.login)
                        // console.log(data.actor.login);
                    }
                    return (
                        <div className="eventsDiv" key={ key }>
                            <Link to={ `/${data.actor.login}` } >
                                <img
                                    src={ data.actor.avatar_url }
                                    alt="avatar url"
                                    className='avatar'
                                    onClick={ () => handleClick() }
                                />
                            </Link>
                            <div className="eventInfoDiv">
                                <p>
                                    { data.actor.login }
                                    { data.type }
                                </p>
                                <p>{ data.repo.name }</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

Events.propTypes
