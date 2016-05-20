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
							name: "Van Os Chrysanten C.V.",
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
							name: "Van Os Chrysanten C.V.",
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
							name: "Van Os Chrysanten C.V.",
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
							}]

						}]
					}]
				}, {
					id: 2,
					name: "Ted",
					role: "Approver",
					customers: [{
						id: "001001",
						growerName: "Van Chomen",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},
						phone: "0612345678",
						greenHouse: [{
							id: "001",
							name: "Van Os Chrysanten C.V.",
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
							name: "Van Os Chrysanten C.V.",
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
							}]

						}]
					}]
					
				}]
			};

			var oGrowerAdvisorModel = new sap.ui.model.json.JSONModel(this.oData);
			this.getView().setModel(oGrowerAdvisorModel, "growAdvisor");
			

		
		},

		onCustRepresChange: function() {
		    
			var sPath = this.getView().byId("growAdvisorSelectorId").getSelectedItem().getBindingContext("growAdvisor").getPath();
			console.log(sPath);
			
			var oCustList = this.getView().byId("customerListId");
			
			oCustList.bindElement({
				path: sPath,
				model: "growAdvisor"
			});
		
		    oCustList.setSelectedItem(oCustList.getItems()[0]);
		  this.onCustomerItemSelect();
			
			
		},

		onCustomerItemSelect: function() {

			var sPath = this.getView().byId("customerListId").getSelectedItem().getBindingContext("growAdvisor").getPath();
			console.log(sPath);

			var oVBox = this.getView().byId("customerDataVBoxId");

			oVBox.bindElement({
				path: sPath,
				model: "growAdvisor"
			});
			console.log(oVBox);

			var oGreenHouseList = this.getView().byId("greenHouseListId");

			oGreenHouseList.bindElement({
				path: sPath,
				model: "growAdvisor"
			});

			oGreenHouseList.setSelectedItem(oGreenHouseList.getItems()[0]);
			 this.onGreenHouseSelect();
			
		
		},

		onGreenHouseSelect: function() {
			var sPath = this.getView().byId("greenHouseListId").getSelectedItem().getBindingContext("growAdvisor").getPath();
			console.log(sPath);
	

			var oVBox = this.getView().byId("greenhouseDataVBoxId");

			oVBox.bindElement({
				path: sPath,
				model: "growAdvisor"
			});
			console.log(oVBox);

			var oTable = this.getView().byId("baysTableId");
			oTable.bindElement({
				path: sPath,
				model: "growAdvisor"
			});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangeMM.view.CustomerPage
		 */
		onBeforeRendering: function() {
		    	var oSelector = this.getView().byId("growAdvisorSelectorId");
		    	oSelector.setSelectedKey(this.getView().getModel("growAdvisor").getData().growerAdvisors[0].name);
		    	this.onCustRepresChange();
		},  

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangeMM.view.CustomerPage
		 */
		onAfterRendering: function() {

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