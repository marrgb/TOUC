sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("ar.com.aduar.controller.App", {
		handlePressConfiguration : function() {
			MessageToast.show("Config Menu pressed")
		},
		handlePressLogoff : function() {
			// MessageToast.show("Logoff pressed")
			var oView = this.getView();
			var oDialog = oView.byId("logoff");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "ar.com.aduar.view.Loggin");
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
			}

			oDialog.open();
		},
		handleUserItemPressed : function() {
			MessageToast.show("User pressed")
		},
		handlePressHome : function() {
			MessageToast.show("Home pressed")
		},
		onLogoff : function() {
			MessageToast.show("Logged off")
		}
	});

});
