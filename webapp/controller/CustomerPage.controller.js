sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangeMM.controller.CustomerPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangeMM.view.CustomerPage
		 */
		onInit: function() {

			//  alert("CustoemrInit");

			var aGrowerAdvisorsList = {
				List: [{
					name: "Peter"
				}, {
					name: "Ted"
				}]
			};
			var oGrowerAdvisorsListModel = new sap.ui.model.json.JSONModel(aGrowerAdvisorsList);
			this.getView().setModel(oGrowerAdvisorsListModel, "growerAdvisorsList");

			this.oData = {
				growerAdvisors: [{
					id: 1,
					name: "Peter",
					role: "Approver",
					customers: [{
						id: "001001",
						growerName: "Van Os Chrysanten C.V.",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},
						phone: "0612345678",
						greenHouse: [{
							id: "001",
							address: {
								street: "Harenwert 48",
								city: "1000 AA Maasland"
							},
							defaultM2: 75,
							phone: "0612345678",
							bays: [{
								id: "01",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "02",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "03",
								description: "Links",
								M2: 75,
								active: false
							}, {
								id: "04",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "05",
								description: "Links",
								M2: 75,
								active: false
							}]

						}, {
							id: "002",
							address: {
								street: "Aallaan 306",
								city: "1000 AA Maasland"
							},
							defaultM2: 100,
							phone: "0612345678",
							bays: [{
								id: "01",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "02",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "03",
								description: "Links",
								M2: 75,
								active: false
							}, {
								id: "04",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "05",
								description: "Links",
								M2: 75,
								active: false
							}]

						}]
					}, {
						id: "001002",
						growerName: "Van Oranje",
						address: {
							street: "Laankade 15",
							city: "1000 AA Midelburg"
						},
						phone: "0612345678",
						greenHouse: [{
							id: "001",
							address: {
								street: "Laankade 15",
								city: "1000 AA Midelburg"
							},
							defaultM2: 10000,
							phone: "0612345678",
							bays: [{
								id: "01",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "02",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "03",
								description: "Links",
								M2: 75,
								active: false
							}, {
								id: "04",
								description: "Links",
								M2: 75,
								active: true
							}, {
								id: "05",
								description: "Links",
								M2: 75,
								active: false
							}]

						}]
					}]
				}]
			};

			var oGrowerAdvisorModel = new sap.ui.model.json.JSONModel(this.oData.growerAdvisors[0]);
// 			var oGrowerModel = new sap.ui.model.json.JSONModel(this.oData.growerAdvisors[0].customers[0]);
			console.log(oGrowerAdvisorModel);
			this.getView().setModel(oGrowerAdvisorModel, "growAdvisor");

		},

		onItemSelect: function(oEvent) {

			var sPath = oEvent.getSource().getBindingContext("growAdvisor").getPath();
			var idx = sPath.substring(sPath.lastIndexOf('/') + 1);
			console.log(idx);

			var sNamePath = "/customers/" + idx + "/growerName";
			var sStreetPath = "/customers/" + idx + "/address/street";
			var sCityPath = "/customers/" + idx + "/address/city";
			var sPhonePath = "/customers/" + idx + "/phone";
            
            var oModel = this.getView().getModel("growAdvisor");
            var name = oModel.getProperty(sNamePath) +1;
            
            console.log(oModel);
            console.log(name);
            
            // this.getView().byId("nameTextId").setText(this.getView().getModel("growAdvisor").getProperty(sNamePath));
            
			this.getView().byId("nameTextId").setText(name);
			this.getView().byId("streetTextId").setText(this.getView().getModel("growAdvisor").getProperty(sStreetPath));
			this.getView().byId("cityTextId").setText(this.getView().getModel("growAdvisor").getProperty(sCityPath));
			this.getView().byId("phoneTextId").setText(this.getView().getModel("growAdvisor").getProperty(sPhonePath));
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangeMM.view.CustomerPage
		 */
		onBeforeRendering: function() {
			//alert("CustoemrBefore");
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangeMM.view.CustomerPage
		 */
		onAfterRendering: function() {
			//alert("CustoemrAfter");
		}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangeMM.view.CustomerPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});