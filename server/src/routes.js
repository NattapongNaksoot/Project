const ElectroluxController = require('./controllers/ElectroluxController')
const PhilipsController = require('./controllers/PhilipsController')
const TefalController = require('./controllers/TefalController')
const XiaomiController = require('./controllers/XiaomiController')

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
}