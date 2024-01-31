// ... (other imports)

const MarkerCluster = ({ markers, addMarkers }) => {
    const map = useMap();
  
    useEffect(() => {
      console.log("Markers:", markers); // Log markers for debugging
  
      markerClusters.clearLayers();
      markers.forEach(({ position }) => {
        const marker = L.marker(new L.LatLng(position.lat, position.lng), {
          icon: customIcon,
        });
        markerClusters.addLayer(marker);
      });
  
      map.addLayer(markerClusters);
    }, [markers, map]);
  
    map.on("moveend", () => {
      const start = window.performance.now();
  
      console.log("Moveend event triggered");
  
      addMarkers();
      const markersToAdd = [];
      markerClusters.clearLayers();
      markers.forEach(({ position }) => {
        const markerToAdd = L.marker(new L.LatLng(position.lat, position.lng), {
          icon: customIcon,
        });
  
        if (markerToAdd !== undefined) {
          markersToAdd.push(markerToAdd);
        }
      });
  
      markerClusters.addLayers(markersToAdd);
  
      const end = window.performance.now();
      console.log(`Time of adding markers and clusters: ${end - start}ms`);
    });
  
    return null;
  };
  
  export default MarkerCluster;
  