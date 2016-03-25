/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	"authResponse":{
  		      collection: 'auth'
  	},
  	"userID":{
  		type:"int"
  	},
  	"name":"string",
  	"email":"string",
  	"picture":"string",
  	words:{
      collection: "word",
      via: "author"
    }

  }
};

	// {"authResponse":{
	// 	  	"session_key":true,
	// 	  	"accessToken":"CAAVPZCetaRmIBAGwp7JAmlKrCOCul3G1oHm1cpe8OYutQHBdS6wen0ZCPpqUeaSanzQHCghcfnhVZCgDkjRgiJVpR6m9XvDv9ZAHJ89nwPapgDoX0uZBoiGoYCmb60V9DAtZCsK90XzB4oywwyCksr5uxpL7lYk6GCZB6DUrFvk6ij01FOznSJQNifjQ3nS6z1srHVVcqzz3m7S5uOP2dBxussBZA0ZCHNrEZD",
	// 	  	"expiresIn":"5179157",
	// 	  	"sig":"...",
	// 	  	"userID":
	// 	  	"10206437389546008",
	// 	  	"secret":"..."
	// 	  },
 //  	"userID":"10206437389546008",
 //  	"name":"Tenzin Ngodup",
 //  	"email":"tenngo@yahoo.com",
 //  	"picture":"http://graph.facebook.com/10206437389546008/picture?type=large"
 //  	}

