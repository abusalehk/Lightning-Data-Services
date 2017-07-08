({
    doInit: function(component, event, helper) {
        component.find("accCreate").getNewRecord(
            "Account", // sObject type (entityApiName)
            null, // recordTypeId
            false // skip cache?
            
        );
    },
    
    handleSave: function(component, event, helper) {
        component.find("accCreate").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // Success! Prepare a toast UI message
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Account  Saved",
                    "message": "The new Account  was created."
                });
                
                // Update the UI: close panel, show toast, refresh account page
                $A.get("e.force:closeQuickAction").fire();
                resultsToast.fire();
                
                // Reload the view so components not using force:recordData
                // are updated
                $A.get("e.force:refreshView").fire();
            }
            
            
        });
    },
    
    handleCancel: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },
})