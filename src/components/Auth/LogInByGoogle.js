import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'



const LogInByGoogle = (props) => 
    <div>
        <RaisedButton
            secondary={true}
            label={'Log In By Google'}
            onClick={props.onLogInClick}
        />
    </div>


export default LogInByGoogle