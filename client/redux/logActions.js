export const AddLog = (log) => {
    return {
        type: 'ADD_LOG',
        log
    }
}

export const DeleteLog = (id) => {
    return {
        type: 'DELETE_LOG',
        id
    }
}

export const EditLog = (log) => {
    return {
        type: 'EDIT_LOG',
        log
    }
}