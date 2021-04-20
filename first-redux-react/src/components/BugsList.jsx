import React, {useEffect, useState} from 'react'
import * as bugActions from "../store/bugs"
import {useDispatch, useSelector} from "react-redux"

export default function BugsList() {
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(bugActions.bugAdded({description: "bug 2"}))
    }, [])

    const bugs = useSelector(state => state.entities.bugs)

  
    return (
        <ul>
            {bugs.map((bug)=> (
                <li key={bug.id}>{bug.description}</li>
            ))}
        </ul>
    )
}
