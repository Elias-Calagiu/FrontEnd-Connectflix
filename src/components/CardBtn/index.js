import React from "react";
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./style.css";

function CardBtn(props) {
  return (
    <button
    onClick={props.onClick} 
    className={`card-btn ${props["data-value"]}`} 
    data-value={props["data-value"]} 
  />   
  /* <FavoriteIcon />
</Fab> */
   
  );
}

export default CardBtn;
