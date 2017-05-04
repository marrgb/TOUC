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
			this._getDialog().open();
		},
		_getDialog : function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("ar.com.aduar.view.loggin", this);
			}
			return this._oDialog;
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
