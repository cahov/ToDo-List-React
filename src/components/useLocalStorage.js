import { useState } from "react";

function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState( () => {
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch{
            return initialValue
        }
    })

    setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error){
            console.log(error)
        }
    }

    return [storedValue, setValue]
}

export {useLocalStorage}