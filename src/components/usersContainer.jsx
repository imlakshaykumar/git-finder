import '../style/userContainer.css'
import { Link } from 'react-router-dom';

export const UserContainer = ({ users }) => {
    return (
        <div className='contentDiv'>
            {
                users && users.map((userData, key) => {
                    return (
                        <div key={ key } className="userCard">

                            <div className="imageBorder">
                                <img className="userImage" src={ userData.avatar_url } alt="user avatar" />
                            </div>
                            <p className="userName">{ userData.login }</p>
                            <Link to={ `/${userData?.login}` }>
                                <button className="viewBtn">
                                    View
                                </button>
                            </Link>
                        </div>

                    );
                })
            }
        </div>
    )
}


// to remove the props validation error
UserContainer.propTypes
