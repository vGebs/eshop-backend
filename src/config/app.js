module.exports = function (app, express) {
    app.use(express.urlencoded({
        extended: true
    }))
    
    app.use(express.json());
}