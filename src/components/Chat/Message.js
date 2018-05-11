import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import moment from 'moment'


const Message = ({message}) => 
    <div>
        <MenuItem>
            <span>
                ({moment(message.timestamp).format('HH:mm')}) </span>
            <b>{message.user}: </b>
            <span>{message.message}</span>
        </MenuItem>

    </div>


export default Message