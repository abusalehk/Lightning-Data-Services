({
    handleSave: function(component, event, helper) {
        component.find("editRec").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");
            }
        }));}
})