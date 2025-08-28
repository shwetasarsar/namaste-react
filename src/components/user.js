
const User =({ name, location, contact })=>{
    return (
        <div className="user-card">
            <div>Name: {name}</div>
            <div>Location: {location}</div>
            <div>Contact: {contact}</div>
        </div>
    )
}

export default User;