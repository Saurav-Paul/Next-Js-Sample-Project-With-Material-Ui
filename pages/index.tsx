import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {get_route} from "../constants/routes";

export default function Index({data}: any) {
    const {expanses, incomes} = data;
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <h1>Welcome to next js sample project</h1>
            </Box>
        </Container>
    );
}


export async function getStaticProps() {
    const url = get_route('transaction_lists')
    const response = await fetch(url)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}