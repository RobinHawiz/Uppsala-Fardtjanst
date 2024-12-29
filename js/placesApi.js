function initMap() {
  const autocompleteInputs = document.getElementsByClassName("autocomplete");
  const options = {
    componentRestrictions: {
      country: "se",
    },
  };
  for (var i = 0; i < autocompleteInputs.length; i++) {
    new google.maps.places.Autocomplete(autocompleteInputs[i], options);
  }
}
