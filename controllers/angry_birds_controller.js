var express = require('express');
var router = express.Router();
var angryBirds = require('../modules/angry_birds');

router.get('/', function(request, response){
    var mustacheVariables ={
        angryBirdsList : angryBirds.birds,
        // imageUrlVaribal : birds
    }
    response.render('./index', mustacheVariables);
})
router.get('/:id', function(request, response){
    var getBirdId = request.params.id;
    var mustacheVariables = {
        angryBirdsList : angryBirds.birds[getBirdId],
    }
    response.render('./show' ,mustacheVariables)
})

module.exports = router;