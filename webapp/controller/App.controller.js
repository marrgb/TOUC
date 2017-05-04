sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("ar.com.aduar.controller.App", {
		// onInit : function() {
		// 	// Shortcuts to Firebase SDK features.
		//   this.auth = firebase.auth();
		//   this.database = firebase.database();
		//   this.storage = firebase.storage();
		//   // Initiates Firebase auth and listen to auth state changes.
		//   this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
		// },
		handlePressConfiguration : function() {
			MessageToast.show("Config Menu pressed")
		},
		handlePressLogoff : function() {
			this._getDialog().open();
		},
		_getDialog : function() {

			var user = firebase.auth().currentUser;

			if (user) {
			  // User is signed in.
				//if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("ar.com.aduar.view.logoff", this);

				//}
			} else {
			  // No user is signed in.
				//if (!this._oDialog) {
					this._oDialog = sap.ui.xmlfragment("ar.com.aduar.view.loggin", this);

				//}
			};

			var i18nModel = new sap.ui.model.resource.ResourceModel({
													bundleUrl : "i18n/i18n.properties"
											});
			this._oDialog.setModel(i18nModel, "i18n");
			return this._oDialog;
		},
		handleUserItemPressed : function() {
			MessageToast.show("User pressed")
		},
		handlePressHome : function() {
			MessageToast.show("Home pressed")
		},
		onLogoff : function() {
			firebase.auth().signOut().then(function() {
			  // Sign-out successful.
				MessageToast.show("{i18n>loggedOff}");
			}, function(error) {
			  // An error happened.
				MessageToast.show("{i18n>errorActionCancelled}");
			});
			this._oDialog.destroyDependents();
			this._oDialog.close();
		},
		onLoggin : function() {
			var provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider).then(function(result) {
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				// ...
				MessageToast.show("{i18n>loggedIn}");
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
			this._oDialog.destroyDependents();
			this._oDialog.close();
		},
		onCloseDialog : function() {
			this._oDialog.destroyDependents();
			this._oDialog.close();
		}
	});

});
