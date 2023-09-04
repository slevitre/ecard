function calculateBayesian() {
    var prior = parseFloat(document.getElementById("prior").value);
    var likelihood = parseFloat(document.getElementById("likelihood").value);
    var marginal = parseFloat(document.getElementById("marginal").value);
  
    var posterior = (prior * likelihood) / marginal;
  
    document.getElementById("result").innerText = posterior;
  }
  