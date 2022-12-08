function init(){

    function click(inp){
      var inp = document.getElementById('entryinput').value;
      var out = document.getElementById('textoutput');
      out.innerHTML = inp;
      alert("Bobby Chavez: " + inp);
    }	
    document.getElementById("entrybutton").addEventListener("click", click);
  }

  
  window.addEventListener('load', init);