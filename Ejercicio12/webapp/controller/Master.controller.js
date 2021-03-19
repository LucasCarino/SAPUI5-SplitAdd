sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "Ejercicio12/Ejercicio12/utils/Services",
	],
	function (Controller, JSONModel, Services) {
		"use strict";
		return Controller.extend("Ejercicio12.Ejercicio12.controller.Master", {
			onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteMaster").attachPatternMatched(this._onRouteMatched, this);
                this.loadModel();
            },
            _onRouteMatched: function (oEvent) {
                this.getOwnerComponent().getRouter().navTo("RouteDetail");
            },
            loadModel: async function () {
                let oComponent = this.getOwnerComponent();
                let oResponse = await Services.getLocalJSON("products.json");
                let oData = oResponse[0];
                var oProducts = new JSONModel();
                oProducts.setData(oData);
                oComponent.setModel(oProducts, "ProductsModel");
                var oModel = this.getView().getModel("ProductsModel");
                var oProductoSeleccionado = oModel.getProperty("/menu/0");
                var oModel = new JSONModel(oProductoSeleccionado);
                this.getOwnerComponent().setModel(oModel, "SelectedProductModel")
            },
            onSelectionChange: function(oEvent) {
                var oBindingContext = oEvent.getSource().getSelectedItem().getBindingContext("ProductsModel");
                var oModel = this.getView().getModel("ProductsModel");
                var oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath());
                var oModel = new JSONModel(oProductoSeleccionado);
                this.getOwnerComponent().setModel(oModel, "SelectedProductModel")
            }
        });
    });
