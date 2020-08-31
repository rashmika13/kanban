import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import List from "./list";
import store from "../utils/store";
import StoreApi from "../utils/storeApi";
import InputContainer from "./input-column";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TopBar from "./TopBar";
import SideMenu from "./SideMenu";
import "./Board.css";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    overflowY: "auto",
  },
  listContainer: {
    display: "flex",
  },
}));

export default function App() {
  const [data, setData] = useState(store);
  const [open, setOpen] = useState(false);

  const [backgroundUrl, setBackgroundUrl] = useState("");
  const classes = useStyle();
  const addMoreCard = (title, listId) => {
    console.log(title, listId);

    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const deleteCard = (event, idx, card, listId) => {
    const newData = { ...data };
    newData.lists[listId].cards.splice(idx, 1);
    setData(newData);
  };

  const handleColumnDelete = (e) => {
    const newData = { ...data };
    let idx = newData.listIds.indexOf(e.target.value);
    newData.listIds.splice(idx, 1);
    setData(newData);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log("destination", destination, "source", source, draggableId);

    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <div className="main-container">
      <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
        <div
          className={classes.root}
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <TopBar setOpen={setOpen} />

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="app" type="list" direction="horizontal">
              {(provided) => (
                <div
                  className={classes.listContainer}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {data.listIds.map((listId, index) => {
                    const list = data.lists[listId];
                    return (
                      <List
                        list={list}
                        // card={card}
                        key={listId}
                        index={index}
                        deleteCard={deleteCard}
                        // editCard={editCard}
                        handleColumnDelete={handleColumnDelete}
                      />
                    );
                  })}
                  <InputContainer type="list" />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <SideMenu
            setBackgroundUrl={setBackgroundUrl}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </StoreApi.Provider>
    </div>
  );
}
