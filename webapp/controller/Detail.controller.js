sap.ui.define([
	"sap/ui/core/mvc/Controller" ,
	"sap/ui/core/routing/History" ,
	"sap/m/MessageToast" 
	
	
], function (Controller , History ,MessageToast ) {
	"use strict";
	return Controller.extend("listdetail.controller.Detail", {
		
		
		
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
		},
		
		
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				
				path: decodeURIComponent("/" + oEvent.getParameter("arguments").invoicePath),
                model: "invoice"

				// path: "/" + oEvent.getParameter("arguments").invoicePath,
				// model: "invoice"
			});
		} ,
		
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true);
			}
		} 
		
		
			
	});
});