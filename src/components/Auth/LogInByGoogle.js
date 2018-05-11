import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import PaperRefinder from '../../components/PaperRefined';



const LogInByGoogle = (props) => (
    <PaperRefinder centered='true'>
        <RaisedButton
            secondary={true}
            label={'Log In By Google'}
            onClick={props.onLogInClick}
        />
    </PaperRefinder>)


export default LogInByGoogle