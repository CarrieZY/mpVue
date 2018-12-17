import { RECEVE_LIST,MOVIES_LIST } from  './mutations-type'
import listData from '../../static/datas/list-data'
export default {
    getList({commit}){
        //触发对应的mutation
        console.log('actions')
        commit(RECEVE_LIST, listData)
    },
    getMoviesList({commit},data){
        commit(MOVIES_LIST,data)
    }
}