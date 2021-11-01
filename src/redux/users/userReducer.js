import { 
    FETCH_ALL_USERS,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    FETCH_ONE_USER,
    FETCH_ONE_USER_SUCCESS,
    FETCH_ONE_USER_FAILURE,
    EDIT_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
} from "./userType";

const usersList = {
    usersData: [],
    oneUser: {},
    loadingFetchUsers: false,
    loadingAddUser: false,
    loadingDeleteUser: false,
    loadingFetchOneUsers: false,
    loadingEditUsers: false,
}

const userReducer = (state = usersList, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                loadingFetchUsers:true
            }
        case FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                usersData : action.payload,
                loadingFetchUsers:false
            }
        case FETCH_ALL_USERS_FAILURE:
            return {
                ...state,
                usersData : action.payload,
                loadingFetchUsers:false
            }

        case DELETE_USER:
            return {
                ...state,
                loadingDeleteUser:true
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loadingDeleteUser:false
            }
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loadingDeleteUser:false
            }
        
        case ADD_USER:
            return {
                ...state,
                loadingAddUser:true
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loadingAddUser:false,
            }
        case ADD_USER_FAILURE:
            return {
                ...state,
                loadingAddUser:false
            }

        case FETCH_ONE_USER:
            return {
                ...state,
                loadingFetchOneUsers:true
            }
        case FETCH_ONE_USER_SUCCESS:
            return {
                ...state,
                oneUser : action.payload,
                loadingFetchOneUsers:false
            }
        case FETCH_ONE_USER_FAILURE:
            return {
                ...state,
                oneUser : action.payload,
                loadingFetchOneUsers:false
            }
            
        case EDIT_USER:
            return {
                ...state,
                loadingEditUser:true
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                loadingEditUser:false,
            }
        case EDIT_USER_FAILURE:
            return {
                ...state,
                loadingEditUser:false
            }

        default:
            return state;
    }
}

export default userReducer;