const cards = [
  {
    id: "card-1",
    title: "Go for a run",
  },
  {
    id: "card-2",
    title: "Order groceries online",
  },
  {
    id: "card-3",
    title: "Have a drink",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "Doing",
      cards: [],
    },
    "list-3": {
      id: "list-3",
      title: "Done",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2", "list-3"],
};

export default data;
