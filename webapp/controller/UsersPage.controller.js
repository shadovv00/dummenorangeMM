sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangeMM.controller.UsersPage", {

		_oAddUserDialog: null,

		onInit: function() {

			var oData = {
				users: [{
					userCode: "00001",
					startPlanningDate: new Date(1442955600000),
					numberWeeksAvailability: 52,
					growerProductionPlanPattern: "week"
				}, {
					userCode: "00002",
					startPlanningDate: new Date(1442955600000),
					numberWeeksAvailability: 52,
					growerProductionPlanPattern: "week"
				}, {
					userCode: "00003",
					startPlanningDate: new Date(1448229600000),
					numberWeeksAvailability: 52,
					growerProductionPlanPattern: "week"
				}, {
					userCode: "00004",
					startPlanningDate: new Date(1450821600000),
					numberWeeksAvailability: 42,
					growerProductionPlanPattern: "week"
				}, {
					userCode: "00005",
					startPlanningDate: new Date(1442955600000),
					numberWeeksAvailability: 52,
					growerProductionPlanPattern: "day"
				}]
			};

			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel);
		},
		onOpenAddUserDialog: function(oEvent) {
		    
			this._getAddUserDialog().open();
		},

		onAddUser: function() {
			this._getAddUserDialog().close();
		},

		onEdit: function(oEvent) {
		
			
			var sPath = oEvent.getSource().getBindingContext().getPath();
			var oModel = this.getView().getModel();
			var oData = oModel.getData();
			var idx = sPath.substring(sPath.lastIndexOf('/') + 1);
// 			var newValue = {
// 			    	userCode: null,
// 					startPlanningDate: null,
// 					numberWeeksAvailability: null,
// 					growerProductionPlanPattern: null
// 			 };
        var oUser = oData.users[idx];
        
                            
        console.log(oUser);
        
        var oUserModel = new sap.ui.model.json.JSONModel(oUser);
        this.getView().setModel(oUserModel, "user");
        
			this._getAddUserDialog().open();
			 var oSelector = sap.ui.getCore().byId("growerProductionSelectId");	
			 oSelector.setSelectedKey(oUser.growerProductionPlanPattern);  	
			 
			
			
		},

		onDelete: function(oEvent) {

			var sPath = oEvent.getSource().getBindingContext().getPath();
			var oModel = this.getView().getModel();
			var oData = oModel.getData();
			var idx = sPath.substring(sPath.lastIndexOf('/') + 1);

			oData.users.splice(idx, 1);
			oModel.setData(oData);
		},

        onClose:function() {
            this._getAddUserDialog().close();
        },
		_getAddUserDialog: function() {
			if (!this._oAddUserDialog) {
				this._oAddUserDialog = sap.ui.xmlfragment("dummenorangeMM.fragments.AddUserDialog", this);
				this.getView().addDependent(this._oAddUserDialog);
			}
			return this._oAddUserDialog;
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangeMM.view.UsersPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangeMM.view.UsersPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangeMM.view.UsersPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});