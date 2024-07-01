import React, { useEffect, useState } from "react";

function ApplicationPortal () {
    
    const [user, setUser] = useState({})
    useEffect (() => {
        const getUser = JSON.parse(sessionStorage.getItem("Curr_user"));
        setUser(getUser)
    }, [])

    return (
        <div>
            <br></br><br></br><br></br><br></br>
            {user!=undefined? 
                <>
                    Welcome {user.name} !
                </>
            : 
            <>
                Loading...
            </>

        }
        </div>
    )

}

export default ApplicationPortal;