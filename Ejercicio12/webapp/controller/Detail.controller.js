sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "Ejercicio12/Ejercicio12/utils/Services",
        "sap/ui/core/Fragment",
        "Ejercicio12/Ejercicio12/utils/Constants",
	],
	function (Controller, JSONModel, Services, Fragment, Constants) {
		"use strict";
		return Controller.extend("Ejercicio12.Ejercicio12.controller.Detail", {
            onInit: function () {
                let oModel = this.getOwnerComponent().getModel(Constants.MODELS.selectedProductModel);
            },
            _onRouteMatched: function(oEvent) {
                this._productsId = oEvent.getParameter("arguments").productsId;
                this.getView().bindElement(Constants.ROUTES.routeDetail + this._productsId);
            },
            onSelectionChange: function (oEvent) {
                var oBindingContext = oEvent.getSource().getSelectedItem().getBindingContext(Constants.MODELS.selectedProductModel);
                var oModel = this.getView().getModel(Constants.MODELS.selectedProductModel);
                var oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath());
                var oModel = new JSONModel(oProductoSeleccionado);
                this.getOwnerComponent().setModel(oModel, Constants.MODELS.detailProductModel);
                const oView = this.getView();
                    if(!this.pDialog) {
                    this.pDialog = Fragment.load({
                        id: oView.getId(),
                        name: Constants.ROUTES.FRAGMENTS.detailProduct,
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    })
                }
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                })
            },
            closeDialog: function () {
                this.byId(Constants.IDS.FRAGMENTS.DetailDialog).close();
            },
        });
    });