(function() {
  const dscc = window.dscc;

  /**
   * Dibuja la visualización del scorecard.
   *
   * @param {object} data - El objeto de datos de Looker.
   * @param {HTMLElement} container - El elemento HTML donde se renderiza la visualización.
   */
  function drawViz(data, container) {
    // Limpia el contenido anterior del contenedor para evitar duplicados.
    container.innerHTML = '';

    // Verifica que haya datos disponibles para dibujar el gráfico.
    if (!data.tables || !data.tables.DEFAULT || data.tables.DEFAULT.length === 0) {
      container.innerHTML = '<p>No hay datos disponibles.</p>';
      return;
    }

    // Obtiene el valor de la primera métrica de la primera fila.
    const metricValue = data.tables.DEFAULT[0].values[0];

    // Crea un nuevo elemento div para mostrar el valor.
    const valueDiv = document.createElement('div');
    valueDiv.style.fontSize = '48px';
    valueDiv.style.fontWeight = 'bold';
    valueDiv.style.textAlign = 'center';

    // Asigna el valor del texto, manejando casos en los que el valor sea nulo o indefinido.
    valueDiv.textContent = metricValue !== undefined && metricValue !== null ? metricValue : 'N/A';

    // Agrega el nuevo elemento div al contenedor de la visualización.
    container.appendChild(valueDiv);
  }

  // Suscríbete a los cambios de datos de Looker. La función `drawViz` se llamará
  // cada vez que los datos cambien, con el objeto de datos y el contenedor
  // de la visualización.
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
})();