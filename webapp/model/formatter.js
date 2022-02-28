sap.ui.define([], function () {
	"use strict";
	return {
		
		statusText: function (sStatus) {
			
			if( sStatus < 20 )
			  return "sap-icon://alert" ;
			  
			else 
			    return "sap-icon://accept";
			    
			   
		}
		
	};
});