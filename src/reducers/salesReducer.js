export const salesReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case '[Sales] getSales':
            return {
                ...state,
                sales: [ ...action.payload ]
            }

        default:
            return state;
    }
}