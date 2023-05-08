export const Tabs = ({ type, setType }) => {
    return (
        <>
            <button
                className={ `btn ${type === "repos"}` }
                onClick={ () => setType("repos") }>Repositories</button>
            <button
                className={ `btn ${type === "received_events"}` }
                onClick={ () => setType("received_events") }>Activity</button>
            <button
                className={ `btn ${type === "followers"}` }
                onClick={ () => setType("followers") }>Followers</button>
        </>
    )
}
Tabs.propTypes
