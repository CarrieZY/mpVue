import { RECEVE_LIST ,MOVIES_LIST} from './mutations-type'
export default {
    [RECEVE_LIST](state,{list_data}){
        state.listTmp = list_data
        console.log(state)
    },
    [MOVIES_LIST](state,data){
        state.moviesList = data
        console.log(state)
    }
}