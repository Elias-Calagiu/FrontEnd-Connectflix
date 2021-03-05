import React from "react";
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./style.css";

function SwipeCardBtn(props) {
  return (
    <div>
      <button
      onClick={props.onClick} 
    className={`card-btn ${props["data-value"]}`} 
    data-value={props["data-value"]} 
    />
    </div>
    
    
     
  /* <FavoriteIcon />
</Fab> */
   
  );
}

export default SwipeCardBtn;
