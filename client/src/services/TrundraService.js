import Api from '@/services/Api'
export default {
    index(trundra) {
        return Api().get('trundras')
    },
    show(trundraId) {
        return Api().get('trundra/' + trundraId)
    },
    post(trundra) {
        return Api().post('trundra', trundra)
    },
    put(trundra) {
        return Api().put('trundra/' + trundra.id, trundra)
    },
    delete(trundra) {
        return Api().delete('trundra/' + trundra.id, trundra)
    },
}