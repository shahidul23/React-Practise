export const reducer = (state, action) =>{
    if (action.type === "ADD") {
        const allBook = [...state.books, action.payload]
        return {
            ...state,
            books: allBook,
            isModalOpen: true,
            modalText: "add new books"
        }
    }
    if (action.type === "REMOVE") {
        const filterBooks = [...state.books].filter((book) =>{
            return book.id !== action.payload
        });
        return {
            ...state,
            books: filterBooks,
            isModalOpen: true,
            modalText: "book is Removed"
        }
    }
    return state;
}