import Api from '@/services/Api'
export default {
    index(savanna) {
        return Api().get('savannas')
    },
    show(savannaId) {
        return Api().get('savanna/' + savannaId)
    },
    post(savanna) {
        return Api().post('savanna', savanna)
    },
    put(savanna) {
        return Api().put('savanna/' + savanna.id, savanna)
    },
    delete(savanna) {
        return Api().delete('savanna/' + savanna.id, savanna)
    },
}