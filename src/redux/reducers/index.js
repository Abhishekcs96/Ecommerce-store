//purpose of index.js is to combine all of the reducers that we create in the application in this file
import {combineReducers} from 'redux';
import { productReducer, Selectedproductreducer } from './productreducer';

export const Reducers = combineReducers({
    allProducts: productReducer,
    product: Selectedproductreducer,
})

export default Reducers;

