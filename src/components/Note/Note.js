import React from 'react'
import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Note({note, removeItem, id}) {
    return (
        <div className="note">
            <h4>{note}</h4>
            <button onClick={()=> removeItem(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default Note
