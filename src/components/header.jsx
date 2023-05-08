import '../style/header.css'
import { FaGithub } from 'react-icons/fa';


export const Header = () => {
    return (
        <div className="header">
            <FaGithub size="5em" />
            <h2>
                GitHub Users
            </h2>
        </div>
    )
}
