var router = function(app){
    app.get('/', function(req, res){
        res.render('../views/index.html');
    });
};

exports.router = router;