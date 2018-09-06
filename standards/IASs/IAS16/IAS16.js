const texts = require('./IAS16texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 16") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Overview,
					  "quickReplies": [
					    "Objective of ias 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.Overview,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Objective of IAS 16") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj_IAS_16,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.obj_IAS_16,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Scope") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope_ias18,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.Scope_ias18,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recognition,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.recognition,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Initial measurement") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ini_msrmnt,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.ini_msrmnt,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Measurement subsequent to initial recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.measOfSubsequent,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.measOfSubsequent,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - The revaluation model") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.revModel,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.revModel,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Depreciation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Depreciation,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.Depreciation,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Recoverability of the carrying amount") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recovOfCarryingAmt,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.recovOfCarryingAmt,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Derecognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Derecognition,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.Derecognition,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.Disclosure,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Revalued property, plant and equipment") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.PPEatRevAmt,
					  "quickReplies": [
					    "IAS 16",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.PPEatRevAmt,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}																	
}