sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangeMM.controller.mainview", {

		handleNav: function(evt) {

			var navCon = this.getView().byId("navCon");
			var target = evt.getSource().data("target")

			if (target) {

				navCon.to(this.getView().byId(target));
			} else {
				navCon.back();
			}

		}

	});
});