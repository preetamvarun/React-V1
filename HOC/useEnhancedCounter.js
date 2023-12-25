import Counter from "./Counter"
import React from "react"

export const useEnhancedCounter = (Counter) => {

    // Return a functional component 
    return () => {
        return (
            <div>
                <p>😂</p>
                <Counter/>
            </div>
        )
    }
}