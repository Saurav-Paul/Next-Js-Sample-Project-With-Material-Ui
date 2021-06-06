import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {debug_print} from "../constants/defaults";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard({transaction}: any) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    debug_print(transaction)

    return (

        <Box marginBottom={1}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {transaction.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Amount : {transaction.amount}
                    </Typography>
                </CardContent>

            </Card>
        </Box>
    );
}
