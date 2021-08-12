import React from 'react';
import { AppContext } from '../App/AppProvider'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    font:{
        fontFamily:"Roboto",
        color:"#662d91"

    }
})


export default function TotalFunds(){
    const classes = useStyles();
    return(
        <AppContext.Consumer>
            {
                ({fundList})=>
                <Card className={classes.font}>
                    <CardContent>
                        <Typography>
                                Total Funds Available : {Object.keys(fundList).length}
                        </Typography>
                    </CardContent>
                </Card>

            }
        </AppContext.Consumer>
    )
}