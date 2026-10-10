function User({displayName,name,getUser}){
    
     
    return(
        <div>
            <button onClick={()=>displayName(name)}>Display name</button>
            <button onClick={()=>getUser()}>Display name</button>
        </div>
    )
}

export default User