import React from 'react'

import Paper from 'material-ui/Paper'

const styles = {
    default: {
        padding: '20px',
        margin: '20px'
    },
    centered: {
        textAlign: 'center'
    }
}

const PaperRefinder = (props) => (
    <Paper style={
        props.centered ?
            { ...styles.default, ...styles.centered }
            : styles.default}>
        {props.children}
    </Paper>
)

export default PaperRefinder