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



		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangeMM.view.PlanningTypesAndActivitiesPage
		 */
			onInit: function() {
		        var oModel = new sap.ui.model.json.JSONModel(this.addPlantsMockup);
				this.getView().setModel(oModel,"planningModel");
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangeMM.view.PlanningTypesAndActivitiesPage
		 */
		//	,onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangeMM.view.PlanningTypesAndActivitiesPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangeMM.view.PlanningTypesAndActivitiesPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});