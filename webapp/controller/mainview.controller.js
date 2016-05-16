sap.ui.define([
			"sap/ui/core/mvc/Controller"
		], function(Controller) {
			"use strict";

			return Controller.extend("dummenorangeMM.controller.mainview", {

					handleNav: function(evt) {
						var navCon = this.getView().byId("navCon");
						var target = evt.getSource().data("target");
						var sPageId = target + "Id";
						if (sap.ui.getCore().byId(sPageId) !== undefined) {
							navCon.to(sPageId);
						} else {
							var oPage = sap.ui.view({
								id: sPageId,
								viewName: "dummenorangeMM.view." + target,
								type: sap.ui.core.mvc.ViewType.XML
							});
							navCon.addPage(oPage);
							navCon.to(oPage);
						}
					}
				
			});
		});