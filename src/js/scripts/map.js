function init() {
    let map1 = new ymaps.Map('map1', {
      center: [53.874684, 27.642895],
      zoom: 16
    });
    // let map2 = new ymaps.Map('map2', {
    //   center: [53.908092, 30.308933],
    //   zoom: 16
    // });
    let placemark1 = new ymaps.Placemark([53.874684, 27.642895], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/logo/map-logo.svg',
      iconImageSize: [52, 52],
      iconImageOffset: [-69, -84]
    });
    // let placemark2 = new ymaps.Placemark([53.908092, 30.308933], {}, {
    //   iconLayout: 'default#image',
    //   iconImageHref: 'https://opyt.by/wp-content/uploads/2023/07/mappinline-1.svg',
    //   iconImageSize: [56, 72],
    //   iconImageOffset: [-69, -84]
    // });
    const maps = [map1];
    maps.forEach(map => map.controls.remove('geolocationControl'));
    maps.forEach(map => map.controls.remove('searchControl'));
    maps.forEach(map => map.controls.remove('trafficControl'));
    maps.forEach(map => map.controls.remove('typeSelector'));
    maps.forEach(map => map.controls.remove('fullscreenControl'));
    maps.forEach(map => map.controls.remove('zoomControl'));
    maps.forEach(map => map.controls.remove('rulerControl'));
    map1.geoObjects.add(placemark1);
    // map2.geoObjects.add(placemark2);
  }
  ymaps.ready(init);