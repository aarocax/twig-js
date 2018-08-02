(function(w) {
	var loadTemplate = function(template, container, ide, texto_to_change) {
    fetch(template)
      .then(function(data){
        data.text().then(function(text) {
          var template = Twig.twig({
            id: ide,
            data: text
          });
          var output = template.render(texto_to_change);
          var x = document.getElementsByClassName(container);
          x[0].innerHTML = output;
        });
      })
      .catch(err => console.log('Algo salió mal'+err)); 
  };
	w.loadTemplate = loadTemplate;
})(window);

