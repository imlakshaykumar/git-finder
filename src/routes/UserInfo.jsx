import { useNavigate } from 'react-router-dom';
import '../style/userInfo.css'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Tabs } from '../components/tabs';
import { Repos } from '../components/Repos';
import { Events } from '../components/Events';
import { Followers } from '../components/followers';

export const UserInfo = ({ baseURL }) => {

    // to navigate back to the all users
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    // console.log(pathname);

    let [user, setUser] = useState([]);
    let [type, setType] = useState("repos");

    async function getUserInfo() {
        const res = await Axios.get(baseURL + pathname)
        setUser([res.data]);
        // console.log(res.data);
    }

    useEffect(() => {
        getUserInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, type]);

    return (
        <div className="userInfoDiv">
            <button onClick={ () => {
                navigate('/')
                console.clear();
            } } className="backBtn">
                Back
            </button>
            {
                user && user.map((userData, key) => {
                    const createdDate = new Date(userData.created_at);
                    const formattedDate = createdDate.toLocaleDateString('en-GB'); // dd/mm/yyyy
                    return (
                        <div className="info" key={ key }>
                            <div className="userImageDiv">
                                <img className='userImage' src={ userData.avatar_url } alt="user avater" />
                            </div>
                            <div className="infodiv">
                                <h2>{ userData.name }</h2>

                                <p>Login_name:
                                    <span> { userData.login }</span>
                                </p>

                                <p>Followers:
                                    <span> { userData.followers }</span>
                                </p>

                                <p>Following:
                                    <span> { userData.following }</span>
                                </p>

                                <p>Public repos:
                                    <span> { userData.public_repos }</span>
                                </p>

                                <p>Join:
                                    <span> { formattedDate }</span>
                                </p>

                                <button className="visitBtn" onClick={ () => {
                                    window.open(userData.html_url, '_blank')
                                } }>
                                    Visit
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="btnBorder">
                <Tabs type={ type } setType={ setType } />
            </div>
            {
                type === "repos" ? (
                    <div>
                        <Repos type={ type } baseURL={ baseURL } />
                    </div>
                ) : type === "received_events" ? (
                    <div>
                        <Events type={ type } baseURL={ baseURL } />
                    </div>
                ) : type === "followers" && (
                    <div>
                        <Followers type={ type } baseURL={ baseURL } />
                    </div>
                )
            }
        </div >
    );
}

UserInfo.propTypes
