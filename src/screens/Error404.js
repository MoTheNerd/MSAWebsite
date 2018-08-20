import React from 'react'
import { Link } from 'react-router-dom'

import Box from 'grommet/components/Box'
import Button from "material-kit-react/components/CustomButtons/Button"

export default class Error404 extends React.Component {

    render() {
        return (
            <Box style={{ backgroundColor: "rgb(243,67,54)" }} full justify="center" align="center">
                <h1 style={{ color: "white" }}>404 | Looks like we're lost!</h1>
                <Button simple component={Link} danger round to="/">Back to home</Button>
            </Box>
        );
    }
}

//243 67 54