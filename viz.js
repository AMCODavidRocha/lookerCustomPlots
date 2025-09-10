(function() {
  const dscc = window.dscc;

  function drawViz(data) {
    const element = document.getElementById('viz');

    if (!element) return;

    // Limpiar contenido anterior
    element.innerHTML = '';

    // Validar que haya datos
    if (data.tables.DEFAULT.length === 0) {
      element.innerHTML = '<p>No hay datos.</p>';
      return;
    }

    const value = data.tables.DEFAULT[0].values[0];

    const div = document.createElement('div');
    div.style.fontSize = '48px';
    div.style.fontWeight = 'bold';
    div.textContent = value;

    element.appendChild(div);
  }

  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
})();
