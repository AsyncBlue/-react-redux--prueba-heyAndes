import { createStore, applyMiddleware } from 'redux'
import { salesReducer } from '../reducers/salesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getSalesDB } from '../firebase/firebaseConfig';

export const store = createStore( salesReducer, composeWithDevTools( applyMiddleware( thunk) ) )

getSalesDB()
    .then( sales => {
        sales = sales.filter( sale => sale.nameAgency !== undefined )
        store.dispatch( { type: '[Sales] getSales', payload: sales } )
    })
