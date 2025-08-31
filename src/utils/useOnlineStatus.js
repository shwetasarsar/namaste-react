import { useEffect, useState } from "react";

const useOnlineStatus =()=>{

    const [onlineStatus, setOnlneStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlneStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlneStatus(true);
        });
    }, []);

    return onlineStatus;

}

export default useOnlineStatus;