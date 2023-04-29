import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        //inside useEffect with empty dependency array because we want it to run once

        const handleOnline = () => {
            setIsOnline(true)
        }
        const handleOffline = () => {
            setIsOnline(false)
        }
        // window.addEventListener("online", () => {
        //     //this code will trigger when we are online
        //     handleOnline()
        // })
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)
        // window.addEventListener("offline", () => {
        //     // this code will trigger when we are online
        //     handleOffline
        // });

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])

    return isOnline; // returns true or false
}

export default useOnline;