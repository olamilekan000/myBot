const texts = require('./IAS38texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 38") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 38",
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
					            "textToSpeech":texts.overview,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.obj,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.scope,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.scope,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Intangible Asset") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.IntangibleAsset,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.IntangibleAsset,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - identifiability") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.identifiability,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.identifiability,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Example of Intangible Asset") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.examplesOfIntangibleAssets,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.examplesOfIntangibleAssets,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Intangibles can be acquired") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.acquireIntangibleAssets,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.acquireIntangibleAssets,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Recognition Criteria") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.RecognitionCriteria,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.RecognitionCriteria,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - initial Recog Of RD") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.initialRecogOfRD,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.initialRecogOfRD,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - initial Measurement") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.InitialMeasurement,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.InitialMeasurement,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Measurement Subsequent To Acquisition") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.MeasurementSubsequentToAcquisition,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.MeasurementSubsequentToAcquisition,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Classification Of Intangible Assets Based On UsefulLife") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ClassificationOfIntangibleAssetsBasedOnUsefulLife,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.ClassificationOfIntangibleAssetsBasedOnUsefulLife,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - intangible Assets With Finite Lives") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.intangibleAssetsWithFiniteLives,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.intangibleAssetsWithFiniteLives,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}	
	if (req.body.queryResult.intent.displayName === "IAS 38 - intangible Assets With Indefinite UsefulLives") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.intangibleAssetsWithIndefiniteUsefulLives,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.intangibleAssetsWithIndefiniteUsefulLives,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Subsequent Expenditure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.SubsequentExpenditure,
					  "quickReplies": [
					    "IAS 38",
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
					            "textToSpeech":texts.SubsequentExpenditure,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 38 - Disclosure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IAS 38",
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
			        			"title": "IAS 38"
			        		}
				       	]
			    	}
				}	
			}
		})
	}																	
}