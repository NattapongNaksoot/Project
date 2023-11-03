import Api from '@/services/Api'
export default {
    index(aquatic) {
        return Api().get('aquatics')
    },
    show(aquaticId) {
        return Api().get('aquatic/' + aquaticId)
    },
    post(aquatic) {
        return Api().post('aquatic', aquatic)
    },
    put(aquatic) {
        return Api().put('aquatic/' + aquatic.id, aquatic)
    },
    delete(aquatic) {
        return Api().delete('aquatic/' + aquatic.id, aquatic)
    },
}