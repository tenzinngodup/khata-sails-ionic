/**
 * WordController
 *
 * @description :: Server-side logic for managing words
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   search: function (req, res) {
   	var myQuery = Word.find();
	myQuery.where({   
		"or": [{
            "word": {
                "contains": req.body.text
            }
        }, {
            "english_word": {
                "contains": req.body.text
            }
        }] 
    }).populate('author');
	myQuery.exec(function callBack(err,results){
    	return res.send(results);
    });

  },
  doRefresh: function (req, res) {
   	var myQuery = Word.find({ limit: 10, sort: 'updatedAt DESC' });
	myQuery.exec(function callBack(err,results){
    	return res.send(results);
    });


  },
   like: function (req, res) {
    Word.findOne(req.body.id, function foundWord(err, word) {
		word.like = word.like + 1;
		word.save(function(err, word) { 
		    	return res.send(word);
				/* updated user */ 
		});
		return req.body.id;
	});
  },
  dislike: function (req, res) {
    Word.findOne(req.body.id, function foundWord(err, word) {
		word.dislike = word.dislike + 1;
		word.save(function(err, word) { 
		    	return res.send(word);
				/* updated user */ 
		});
		return req.body.id;
	});
  },


  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
	
};

