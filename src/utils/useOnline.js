import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        //inside useEffect with empty dependency array because we want it to run once
        window.addEventListener("online", () => {
            // this code will trigger when we are online
            setIsOnline(true)
        })
        window.addEventListener("offline", () => {
            // this code will trigger when we are online
            setIsOnline(false)
        })
    }, [])



    return isOnline; // returns true or false
}

export default useOnline;