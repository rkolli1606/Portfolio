console.log("inside scripts");
      
function modelRowElement(tableId, modelId)
{

return document.querySelector("#"+tableId+">"+"."+modelId).innerHTML="ramu";
}

const obj = modelRowElement("computer-models","ln-2600");
