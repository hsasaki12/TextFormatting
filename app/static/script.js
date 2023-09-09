function formatText() {
    const inputText = document.getElementById("inputText").value;
    let outputText = inputText;
  
    if (document.getElementById("newline").checked) {
      outputText = outputText.replace(/\n/g, "");
    }
  
    if (document.getElementById("tab").checked) {
      outputText = outputText.replace(/\t/g, "");
    }
  
    if (document.getElementById("spaces").checked) {
      outputText = outputText.replace(/^\s+|\s+$/g, "");
    }
  
    if (document.getElementById("allSpaces").checked) {
      outputText = outputText.replace(/\s+/g, "");
    }
  
    document.getElementById("outputText").value = outputText;
  }
  
  function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
  }
  