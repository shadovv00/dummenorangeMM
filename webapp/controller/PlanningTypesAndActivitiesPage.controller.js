sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangeMM.controller.PlanningTypesAndActivitiesPage", {

		addPlantsMockup: {
		    Planning: [
        		{"id": 1,
        		"planning_type": "ROOTED",
        		"language": "Dutch",
        		"description": "Rooted Chrysantemums",
				"weeks_before": 2,
				"weeks_after": 0,
				deleted:0,
           		"activities": [{
                	"activity_type":"ROOT",
            		"language": "Dutch",
            		"sort_key": 0,
            		"description": "Rooting days",
            		"plan_date": 0,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"PLANT",
            		"language": "Dutch",
            		"sort_key": 1,
            		"description": "PLanted date",
            		"plan_date": 1,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"VEG",
            		"language": "Dutch",
            		"sort_key": 2,
            		"description": "Vegetative days",
            		"plan_date": 0,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"REA",
            		"language": "Dutch",
            		"sort_key": 3,
            		"description": "Reaction days",
            		"plan_date": 0,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"HARV",
            		"language": "Dutch",
            		"sort_key": 4,
            		"description": "Harvest days",
            		"plan_date": 0,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"WAIT",
            		"language": "Dutch",
            		"sort_key": 5,
            		"description": "Vacant days",
            		"plan_date": 0,
            		"wait": 1,
    				deleted:0
        		    }]
        		},
        		{"id": 2,
        		"planning_type": "UNROOTED",
        		"language": "Dutch",
        		"description": "Unrooted Chrysantemums",
				"weeks_before": 4,
				"weeks_after": 0,
				deleted:0,
           		"activities": [{
                	"activity_type":"PLANT",
            		"language": "Dutch",
            		"sort_key": 1,
            		"description": "PLanted date",
            		"plan_date": 1,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"VEG",
            		"language": "Dutch",
            		"sort_key": 2,
            		"description": "Vegetative days",
            		"plan_date": 0,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"REA",
            		"language": "Dutch",
            		"sort_key": 3,
            		"description": "Reaction days",
            		"plan_date": 0,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"HARV",
            		"language": "Dutch",
            		"sort_key": 4,
            		"description": "Harvest days",
            		"plan_date": 0,
            		"wait": 0,
    				deleted:0
        		    }, {
                	"activity_type":"WAIT",
            		"language": "Dutch",
            		"sort_key": 5,
            		"description": "Vacant days",
            		"plan_date": 0,
            		"wait": 1,
    				deleted:0
        		    }]
        		}		        ]

		},

			onInit: function() {
		        var oModel = new sap.ui.model.json.JSONModel(this.addPlantsMockup);
				this.getView().setModel(oModel,"planningModel");
			}

    		,onPlanningRowSelect: function(oEvent) {
				this.getView().byId("activityTypeTable").unbindRows();
				this.getView().byId("activityTypeTable").bindRows("planningModel>/Planning/"+this.getView().byId("planningTypeTable").getSelectedIndex()+"/activities");
    		}
	});

});