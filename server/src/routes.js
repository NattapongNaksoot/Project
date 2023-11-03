const ElectroluxController = require('./controllers/ElectroluxController')
const PhilipsController = require('./controllers/PhilipsController')
const TefalController = require('./controllers/TefalController')
const XiaomiController = require('./controllers/XiaomiController')
const AquaticController = require('./controllers/AquaticController')
const TropicalController = require('./controllers/TropicalController')
const SavannaController = require('./controllers/SavannaController')
const TrundraController = require('./controllers/TrundraController')
const GrasslandController = require('./controllers/GrasslandController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Electrolux
    app.get('/electroluxs', ElectroluxController.index)
    
    app.post('/electrolux', ElectroluxController.create)
    
    app.put('/electrolux/:electroluxId', ElectroluxController.put)
    
    app.delete('/electrolux/:electroluxId', ElectroluxController.delete)
    
    app.get('/electrolux/:electroluxId', ElectroluxController.show)

    
    // Philips
    // get all philips
    app.get('/philipss', PhilipsController.index)
    
    // create philips
    app.post('/philips', PhilipsController.create)
    
    // edit philips, suspend, active
    app.put('/philips/:philipsId', PhilipsController.put)

    // delete philips
    app.delete('/philips/:philipsId', PhilipsController.delete)
    
    // get philips by id
    app.get('/philips/:philipsId', PhilipsController.show)

    
    // Tefal
    app.get('/tefals', TefalController.index)
    
    app.post('/tefal', TefalController.create)
    
    app.put('/tefal/:tefalId', TefalController.put)
    
    app.delete('/tefal/:tefalId', TefalController.delete)
    
    app.get('/tefal/:tefalId', TefalController.show)


    // Xiaomi
    app.get('/xiaomis', XiaomiController.index)
    
    app.post('/xiaomi', XiaomiController.create)
    
    app.put('/xiaomi/:xiaomiId', XiaomiController.put)
    
    app.delete('/xiaomi/:xiaomiId', XiaomiController.delete)
    
    app.get('/xiaomi/:xiaomiId', XiaomiController.show)
     
    // Aquatic
     app.get('/aquatics',AquaticController.index)
    
     app.post('/aquatic', AquaticController.create)
     
     app.put('/aquatic/:aquaticId',AquaticController.put)
     
     app.delete('/aquatic/:aquaticId', AquaticController.delete)
     
     app.get('/aquatic/:aquaticId', AquaticController.show)

    // Tropical
    app.get('/tropicals', TropicalController.index)
    
    app.post('/tropical', TropicalController.create)
    
    app.put('/tropical/:tropicalId', TropicalController.put)
    
    app.delete('/tropical/:tropicalId', TropicalController.delete)
    
    app.get('/tropical/:tropicalId', TropicalController.show)

    //Savanna
    app.get('/savannas', SavannaController.index)
    
    app.post('/savanna', SavannaController.create)
    
    app.put('/savanna/:savannaId', SavannaController.put)
    
    app.delete('/savanna/:savannaId', SavannaController.delete)
    
    app.get('/savanna/:savannaId', SavannaController.show)

    //Trundra
    app.get('/trundras', TrundraController.index)
    
    app.post('/trundra', TrundraController.create)
    
    app.put('/trundra/:trundraId', TrundraController.put)
    
    app.delete('/trundra/:trundraId', TrundraController.delete)
    
    app.get('/trundra/:trundraId', TrundraController.show)
    
    //Grassland
    app.get('/grasslands', GrasslandController.index)
    
    app.post('/grassland', GrasslandController.create)
    
    app.put('/grassland/:grasslandId', GrasslandController.put)
    
    app.delete('/grassland/:grasslandId', GrasslandController.delete)
    
    app.get('/grassland/:grasslandId', GrasslandController.show)

}