import React,{useState} from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
import DragPhoto from "./CardActions/DragPhoto";


const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default function Card({ card, index, deleteCard, listId }) {
  const classes = useStyle();

  //   const bannerImage = document.getElementById("uploadBannerImage");
  //   var imgData = getBase64Image(bannerImage);
  //   localStorage.setItem("imgData", imgData);

  //   var dataImage = localStorage.getItem("imgData");
  //   const bannerImg = document.getElementById("tableBanner");
  //   bannerImg.src = "data:image/png;base64," + dataImage;

  //   function readURL(input) {
  //     document.getElementById("bannerImg").style.display = "block";

  //     if (input.files && input.files[0]) {
  //       var reader = new FileReader();

  //       reader.onload = function (e) {
  //         document.getElementById("bannerImg").src = e.target.result;
  //       };

  //       reader.readAsDataURL(input.files[0]);
  //     }
  //   }

  //   function getBase64Image(img) {
  //     var canvas = document.createElement("canvas");
  //     canvas.width = img.width;
  //     canvas.height = img.height;

  //     var ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);

  //     var dataURL = canvas.toDataURL("image/png");

  //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  //   }
  const [showButton,setShowButton] = useState(false)
  const showEdit= (show) => {
    if(show){
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  // const deleteCard = (event) => {
  //  const cardsList = card
  //   console.log(cardsList)
  // }

  return (
    <div>
      {
        showButton ? (
          <div>
        <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <Paper  onMouseEnter={() => showEdit(true)}
                     onMouseLeave={() => showEdit(false)}
          className={classes.card}>{card.title}
          <button>Edit</button>
          <button onClick={(event,idx) => deleteCard(event,index,card,listId)}>Delete</button></Paper>
          </div>
        )}
      </Draggable>
      <DragPhoto />
      </div>)
      :(
        <div>
       <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper  onMouseEnter={() => showEdit(true)}
                   onMouseLeave={() => showEdit(false)}
        className={classes.card}>{card.title}</Paper>
        </div>
      )}
    </Draggable>
    <DragPhoto />}
      </div>)}
    </div>
  );
}
