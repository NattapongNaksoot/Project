
const AquaticController = require('./controllers/AquaticController')
const TropicalController = require('./controllers/TropicalController')
const SavannaController = require('./controllers/SavannaController')
const TrundraController = require('./controllers/TrundraController')
const GrasslandController = require('./controllers/GrasslandController')

module.exports = (app) => {
    /* RESFUL Api for users management */

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