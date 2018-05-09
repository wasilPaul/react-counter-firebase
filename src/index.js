import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Add from './toDO';

ReactDOM.render(<MuiThemeProvider>
    <Add />
</MuiThemeProvider>, document.getElementById('root'))
