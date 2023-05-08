import '../style/events.css'
import Axios from 'axios';
import { useEffect, useState } from 'react';

export const Events = ({ type }) => {
    // console.log(type);

    let baseURL = "https://api.github.com/users";
    let pathname = window.location.pathname;
    let [events, setEvents] = useState([])

    async function getEvents() {
        const res = await Axios.get(baseURL + pathname + "/" + `${type}`)
        setEvents(res.data);
    }
    useEffect(() => {
        getEvents()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setEvents])


    return (
        <div className="eventsMainDiv">
            {
                events && events?.map((data, key) => {
                    return (
                        <div className="eventsDiv" key={ key }>
                            <img src={ data.actor.avatar_url } alt="avatar url" className='avatar' />
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
