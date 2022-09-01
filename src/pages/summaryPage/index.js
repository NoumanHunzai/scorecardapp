import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import chart from "../../assets/Chart.png"

const SummaryPage = () => {
  const classes = useStyles();
  return (
    <div>
        <Box>
              <Typography variant="h1" className={classes.summaryHeading}>Summary</Typography >
              <Box className={classes.descriptionContainer}>
                <Typography variant="body1" className={classes.description}>You’d be scoring your selected candidates in 4 sections namely: General, Knowledge & Political History, Global & Business 
                </Typography>
                <Typography variant="body1" className={classes.description}>Exposure and Values. You can move forward after scoring your candidate(s) using the “Next” button or the section tabs below.
                </Typography>

              </Box>
        </Box>
        <div className={classes.chartDetailsContainer}>
          <img className={classes.chart} src={chart} alt="chart"/>
          <div className={classes.chartSideDetails}>
            <Typography variant="body2" className={classes.chartDetails}>Legend & Score
            
            <div  className={classes.dotFlex}>
            <div className={classes.blackDot}></div>
            <Typography variant="h2" className={classes.chartDetails}>Candidate 1 - 70 points</Typography ></div>

            <div className={classes.dotFlex}>
            <div className={classes.greenDot}></div>
            <Typography variant="h2" className={classes.chartDetails}>Candidate 2 - 55 points  </Typography >
            </div>
           
            <div className={classes.dotFlex}>
            <div className={classes.blackDot}></div><Typography variant="h2" className={classes.chartDetails}>Candidate 3 - 52 points  </Typography >
            </div>
         
            </Typography >
          </div>
        </div>
    </div>
  )
}

export default SummaryPage;

const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    paddingTop:40,
   textAlign: 'center',
  },
  chart:{
    height:228,
    width:680,
  },
  chartDetailsContainer: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  chartSideDetails: {paddingLeft:30,},
  dotFlex:{
    display: 'flex',
    alignItems: 'center',
  },
  chartDetails:{paddingLeft:10},

  blackDot:{
    width:16,
    height:16,
    borderRadius:"100%",
    backgroundColor:"black"
    // backgroundColor: theme.palette.primary.main
  },
  greenDot:{
    width:16,
    height:16,
    borderRadius:"100%",
    // backgroundColor: theme.palette.primary.main
  },

}));
