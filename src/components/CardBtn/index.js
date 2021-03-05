import React from "react";
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./style.css";

function CardBtn(props) {
  return (
    <div>
      <button className="card-btn"
      onClick={props.onClick} 
    />
    </div>
    
    
     
  /* <FavoriteIcon />
</Fab> */
   
  );
}

export default CardBtn;