/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Ejercicio12/Ejercicio12/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
