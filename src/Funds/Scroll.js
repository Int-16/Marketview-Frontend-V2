import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    toTop:{
        zIndex : 2,
        position:'fixed',
        bottom:'2vh',
        backgroundColor:'#DCDCDC',
        color:'Black',
        "&:hover, &.Mui-focusVisible" : {
            transition:'0.3s',
            color:"#397BA6",
            backgroundColor:'#DCDCDC'
        },
        right: "5%"
    }
}))

export default function Scroll(showBelow){

    const classes = useStyles();

    const [show,setShow] = useState(showBelow ? false: true)

    const handleScroll = () =>{
        if(window.pageYOffset > showBelow){
            if(!show) setShow(true)
        }else{
            if(show) setShow(false)
        }
    }

    useEffect(()=>{
        if(showBelow){
            window.addEventListener(`scroll`,handleScroll)
            return () => window.removeEventListener(`scroll`,handleScroll)
        }
    })


    const handleClick = () =>{
        window[`scrollTo`]({top:0,behavior:`smooth`})
    }
    return(
        <div>
            <IconButton onClick={handleClick} className={classes.toTop}>
                <ExpandLessIcon/>
            </IconButton>        
        </div>
    )
}
