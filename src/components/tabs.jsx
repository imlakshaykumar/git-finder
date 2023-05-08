export const Tabs = ({ type, setType }) => {

    return (
        <>
            <button
                className={ `btn ${type === "repos" ? 'active' : ''}` }
                onClick={ () => {
                    // setType("")
                    setType("repos")
                } }>Repositories</button>
            <button
                className={ `btn ${type === "received_events" ? 'active' : ''}` }
                onClick={ () => {
                    // setType("")
                    setType("received_events")
                } }>Activity</button>
            <button
                className={ `btn ${type === "followers" ? 'active' : ''}` }
                onClick={ () => {
                    // setType("")
                    setType("followers")
                } }>Followers</button>
        </>
    )
}
Tabs.propTypes
