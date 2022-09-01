import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import chart from "../../assets/Chart.png"
import Buttons from '../../units/buttons';
import DividerLine from '../../units/Divider';

const SummaryPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <Box>
              <Typography variant="h1" className={classes.summaryHeading}>Summary</Typography >
              <Box className={classes.descriptionContainer}>
                <Typography variant="body2" className={classes.description}>You’d be scoring your selected candidates in 4 sections namely: General, Knowledge {"&"} Political History, Global {"&"} Business 
                </Typography>
                <Typography variant="body2" className={classes.description}>Exposure and Values. You can move forward after scoring your candidate(s) using the “Next” button or the section tabs below.
                </Typography>

              </Box>
        </Box>
        <Box className={classes.divider}>
        <DividerLine/>
        </Box>
          

          <div className={classes.rowsBar}>
        <Typography className={classes.rowsTab}>General  <span className={classes.tabsPadding}>{">"}</span></Typography>
        <Typography className={classes.rowsTab}>
          Knowledge{"&"}Political History <span className={classes.tabsPadding}>{">"}</span>
        </Typography>

        <Typography className={classes.rowsTab} >
          Global{"&"}Business Exposure <span className={classes.tabsPadding}>{">"}</span>
        </Typography>
        <Typography className={classes.rowsTab}>Values  <span className={classes.tabsPadding}>{">"}</span></Typography>
        <Typography className={classes.rowsTab}> Summary  <span className={classes.tabsPadding}>{">"}</span></Typography>
      </div>
        <div className={classes.chartDetailsContainer}>
          <img className={classes.chart} src={chart} alt="chart"/>
          <div className={classes.chartSideDetails}>
            <Typography variant="body1" className={classes.chartDetails}>Legend & Score
            
            <div  className={classes.dotFlex}>
            <div className={classes.blackDot}></div>
            <Typography variant="body1" className={classes.chartDetails}>Candidate 1 - 70 points</Typography ></div>

            <div className={classes.dotFlex}>
            <div className={classes.greenDot}></div>
            <Typography variant="body1" className={classes.chartDetails}>Candidate 2 - 55 points  </Typography >
            </div>
           
            <div className={classes.dotFlex}>
            <div className={classes.blackDot}></div><Typography variant="body1" className={classes.chartDetails}>Candidate 3 - 52 points  </Typography >
            </div>
         
            </Typography >
          </div>
        </div>

        <div className={classes.chartDetailsContainer}>
        <Buttons variant="green">Share result</Buttons>
        </div>
    </div>
  )
}

export default SummaryPage;

const useStyles = makeStyles((theme) => ({
  container:{padding: "20px 50px",},
  summaryHeading:{paddingTop:"10px",textAlign: 'center'},
  description:{color:theme.palette.secondary.main},
  descriptionContainer: {
    
    paddingTop:40,
   textAlign: 'center',
  },
  divider: {
    paddingTop:20,
  },
  tabsPadding:{padding:"0px 20px "},
  rowsBar: {
    display: "flex",
   
    paddingTop:5,
    width: "90%",
    marginBottom: "20px",
  },
  rowsTab: {
    display: "flex",
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
    paddingTop:10,
    display: 'flex',
    alignItems: 'center',
  },
  chartDetails:{paddingLeft:10},

  blackDot:{
    width:16,
    height:16,
    borderRadius:"100%",
    backgroundColor: theme.palette.primary.main
  },
  greenDot:{
    width:16,
    height:16,
    borderRadius:"100%",
    backgroundColor: theme.palette.text.select
  },

}));
