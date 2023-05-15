import Axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/repos.css'

export const Repos = ({ type, baseURL }) => {
    // console.log(type);

    let pathname = window.location.pathname;
    let [gitrepos, setGitrepos] = useState([])

    async function getRepos() {
        const res = await Axios.get(baseURL + pathname + "/" + `${type}`)
        setGitrepos(res.data);
    }
    useEffect(() => {
        getRepos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setGitrepos])

    return (
        <div className="repoMainDiv">
            {
                gitrepos && gitrepos?.map((data, key) => {
                    return (
                        <div key={ key } className="repoDiv">
                            <p className='repoLink' onClick={ () => {
                                window.open(data.html_url, "_blank")
                            } }>
                                { data.full_name }
                            </p>
                            <p className='repoDetail'>
                                <span>🟢{ data.language }</span>
                                <span>forks:{ data.forks }</span>
                                <span>stars:{ data.stargazers_count }</span>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

Repos.propTypes
