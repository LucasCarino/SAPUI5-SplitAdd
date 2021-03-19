sap.ui.define([
], function () {
    "use strict";
    return{
        MODELS: {
            selectedProductModel: "SelectedProductModel",
            detailProductModel: "DetailProductModel"
        },
        IDS: {
            FRAGMENTS: {
                SearchResume: "SearchResume",
                DetailDialog: "DetailDialog",
                Table: "fragmentTable"
            },
            SearchTable: "searchTable",
            TableProducts: "tableProducts"
        },
        ROUTES: {
            main: "Main",
            routeDetail: "/RouteDetail/",
            FRAGMENTS: {
                detailProduct: "Ejercicio12/Ejercicio12/fragments/detailProduct",
                DetailDialog: "EvaluacionPractica.EvaluacionPractica.fragments.DetailDialog"
            },
        },
        JSON: {
            Products: "Products.json"
        },
        filters: {
            product: "product",
            supplier: "supplier",
        }
    };
}, true);