sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel" ,
	 "listdetail/model/formatter",
	 "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

	
], function (Controller ,JSONModel,formatter,Filter ,FilterOperator) {
	"use strict";
	return Controller.extend("listdetail.controller.List", {
    formatter: formatter,
//onInit 
	onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
			onObjectItemPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail", {
                      invoicePath: encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		} ,
		
		
		

		onSearch : function (oEvent) {
			// create a blank filter array
			var aFilter = [];
			// get the string which was searched by the user
			var sQuery = oEvent.getParameter("query");
			// create new filter object using the searched string
			var oFilter = new sap.ui.model.Filter("ProductName", FilterOperator.Contains, sQuery);
			// push the newly created filter object in the blank filter array created above.
			aFilter.push(oFilter);
			// get the binding of items aggregation of the List
			var oBinding = this.getView().byId("emplist").getBinding("items");
			// apply filter on the obtained binding
			oBinding.filter(aFilter);

		}
	
	
	
	
	
		
		
	});
});