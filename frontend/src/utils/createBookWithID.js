import { v4 as uuid4 } from "uuid";

const createBookWithID = (book) => {
  return {
    ...book,
    usFavorite: false,
    id: uuid4(),
  };
};

export default createBookWithID;
