import Api from '@/services/Api'
export default {
    index(grassland) {
        return Api().get('grasslands')
    },
    show(grasslandId) {
        return Api().get('grassland/' + grasslandId)
    },
    post(grassland) {
        return Api().post('grassland', grassland)
    },
    put(grassland) {
        return Api().put('grassland/' + grassland.id, grassland)
    },
    delete(grassland) {
        return Api().delete('grassland/' + grassland.id, grassland)
    },
}