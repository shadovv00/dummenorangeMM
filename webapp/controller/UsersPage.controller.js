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

			var oUserModel = new sap.ui.model.json.JSONModel();
			this.getView().setModel(oUserModel, "user");
		},
		onOpenAddUserDialog: function(oEvent) {

			this._getAddUserDialog().open();

			var oEditButton = sap.ui.getCore().byId("editButtonId");
			var oAddButton = sap.ui.getCore().byId("addButtonId");
			var oTitle = sap.ui.getCore().byId("titleId");

			oAddButton.setVisible(true);
			oEditButton.setVisible(false);
			oTitle.setText("Add user");

			var oUser = {
				userCode: null,
				startPlanningDate: null,
				numberWeeksAvailability: null,
				growerProductionPlanPattern: null
			};

			var oUserModel = this.getView().getModel("user");
			oUserModel.setData(oUser);
			oUserModel.refresh();
		},

		onAddUser: function() {

			var oUser = this.getView().getModel("user").getData();

			if (oUser.userCode != null && oUser.userCode.trim().length > 0) {

				var oUsersModel = this.getView().getModel();
				var oUsersData = oUsersModel.getData();
				var oProductionPlanSelect = sap.ui.getCore().byId("growerProductionSelectId");
				var sKey = oProductionPlanSelect.getSelectedKey();

				oUser.growerProductionPlanPattern = sKey;

				oUsersData.users.push(oUser);
				oUsersModel.refresh();

				this._getAddUserDialog().close();
			} else
				sap.m.MessageToast.show("Please put user code");

		},

		onEdit: function(oEvent) {

			var sPath = oEvent.getSource().getBindingContext().getPath();
			var oModel = this.getView().getModel();
			var oData = oModel.getData();
			this._idx = sPath.substring(sPath.lastIndexOf('/') + 1);
			// 			var newValue = {
			// 			    	userCode: null,
			// 					startPlanningDate: null,
			// 					numberWeeksAvailability: null,
			// 					growerProductionPlanPattern: null
			// 			 };
			var oUser = oData.users[this._idx];

			console.log(oUser);

			var oUserModel = this.getView().getModel("user");
			oUserModel.setData(oUser);
			oUserModel.refresh();

			this._getAddUserDialog().open();
			var oSelector = sap.ui.getCore().byId("growerProductionSelectId");
			oSelector.setSelectedKey(oUser.growerProductionPlanPattern);

			var oEditButton = sap.ui.getCore().byId("editButtonId");
			var oAddButton = sap.ui.getCore().byId("addButtonId");
			var oTitle = sap.ui.getCore().byId("titleId");

			oAddButton.setVisible(false);
			oEditButton.setVisible(true);
			oTitle.setText("Edit user");

		},

		onEditUser: function(oEvent) {
			var oUser = this.getView().getModel("user").getData();
			console.log(oUser);
			
			

			if (oUser.userCode != null && oUser.userCode.trim().length > 0) {
                
				var oUsersModel = this.getView().getModel();
				var oUsersData = oUsersModel.getData();
				var oProductionPlanSelect = sap.ui.getCore().byId("growerProductionSelectId");
				var sKey = oProductionPlanSelect.getSelectedKey();

				oUser.growerProductionPlanPattern = sKey;

			

				oUsersData[this._idx] = oUser;
				oUsersModel.refresh();

				this._getAddUserDialog().close();

			} else
				sap.m.MessageToast.show("Please put user code");

		},

		onDelete: function(oEvent) {

			var sPath = oEvent.getSource().getBindingContext().getPath();
			var oModel = this.getView().getModel();
			var oData = oModel.getData();
			var idx = sPath.substring(sPath.lastIndexOf('/') + 1);

			oData.users.splice(idx, 1);
			oModel.setData(oData);
		},

		onClose: function() {
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
			onBeforeRendering: function() {
// 		 alert("userbefore");
			},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangeMM.view.UsersPage
		 */
			onAfterRendering: function() {
// 		 alert("userafter");
			}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangeMM.view.UsersPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});