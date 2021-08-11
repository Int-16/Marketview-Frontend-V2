import React from 'react'
import { AppContext } from '../App/AppProvider'
import DataGrid from './DataGrid'
import HistoricalChart from './HistoricalChart'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StatsGrid from './StatsGrid'
import MonthlyCharts from './MonthlyCharts'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import NavChart from './NavChart'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
        fontSize: 14,
        fontWeight:"bold",
      },
      Toggle:{
          color:"black"
      }
      
}));


export default function MainGrid(){
    const classes = useStyles();
    const [active, setActive] = React.useState('1M');

  const handleActiveState = (event,newValue) => {
    setActive(newValue);
  };
    return(
        <AppContext.Consumer>
            {
                ({setButtonLimit,historicalList}) =>
                 <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                                <h5>{historicalList.fundName} - {historicalList.schemeName} - {historicalList.schemeType}</h5>
                    </Grid>
                    <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} color="black" gutterBottom>
                                       NAV Returns 
                            </Typography>
                            <ToggleButtonGroup
                                value={active}
                                exclusive
                                onChange={handleActiveState}
                            >
                                <ToggleButton className={classes.Toggle} onClick={()=>setButtonLimit(22)} value="1M">
                                    1M
                                </ToggleButton>
                                <ToggleButton className={classes.Toggle} onClick={()=>setButtonLimit(66)} value="3M">
                                    3M
                                </ToggleButton>
                                <ToggleButton  className={classes.Toggle} onClick={()=>setButtonLimit(132)}  value="6M">
                                    6M
                                </ToggleButton>
                                <ToggleButton className={classes.Toggle} onClick={()=>setButtonLimit(252)} value="1Y">
                                    1Y
                                </ToggleButton>
                            </ToggleButtonGroup>
                           
                            <NavChart/>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} color="black" gutterBottom>
                                       TIME SERIES
                            </Typography>
                            <DataGrid/>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                                <Typography className={classes.title} color="black" gutterBottom>
                                       LAST 3 MONTHS RETURNS
                                </Typography>
                            <MonthlyCharts/>
                        </CardContent>
                    </Card>  
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                                <Typography className={classes.title}  color="black" gutterBottom>
                                       STATISTICS
                                </Typography>
                                <StatsGrid/>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12}>
                    <Card>
                        <CardContent>
                                <Typography className={classes.title} color="black" gutterBottom >
                                       HISTORICAL CUMULATIVE RETURNS
                                </Typography>
                            <HistoricalChart/>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                </div>
            }
        </AppContext.Consumer>
    )

}