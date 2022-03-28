export const addBug = (title) => {
    return {
        type: "ADD_BUG",
        payload: {
            title
        }
    }
}

export const deleteBug = (id) => {
    return {
        type: "DELETE_BUG",
        payload: {
            id
        }
    }
}