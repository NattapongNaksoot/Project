import Api from '@/services/Api'
export default {
    index(tropical) {
        return Api().get('tropicals')
    },
    show(tropicalId) {
        return Api().get('tropical/' + tropicalId)
    },
    post(tropical) {
        return Api().post('tropical', tropical)
    },
    put(tropical) {
        return Api().put('tropical/' + tropical.id, tropical)
    },
    delete(tropical) {
        return Api().delete('tropical/' + tropical.id, tropical)
    },
}