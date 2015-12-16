// function Create_Star(){
    
//     var cluster = document.querySelector('.cluster');
    
//     var star = '<div class="star"></div>';
//     for(var i = 0; i < 800; i++){
        
//         star = star + ' <div class="star"></div>'
//     }
    
//     cluster.innerHTML = star;
    
//     var star__style = "<style>";
    
//     for(var i = 0; i < 800; i++){
//         var x = parseInt(Math.random() * 4000 - 2000);
//         var y = parseInt(Math.random() * 4000 - 2000);
//         var z = parseInt(Math.random() * 4000 - 2000);
//         star__style = star__style + " .star:nth-child(" + i + ") {-webkit-transform: translate3d(1455px, -128px, -15px);transform: translate3d(" + x + "px, " + y + "px, " + z + "px);} ";
//     }
//     star__style += "</style>";
//     document.write(star__style);
    
    
// }

// Create_Star();

var AJAX = {
    get: function(url) {
        return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
          // This is called even on 404 etc
          // so check the status
          if (req.status == 200) {
            // Resolve the promise with the response text
            resolve(req.response);
          }
          else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(Error(req.statusText));
          }
        };

        // Handle network errors
        req.onerror = function() {
          reject(Error("Network Error"));
        };

        // Make the request
        req.send();
      });
    }
}

var planet = new Vue({
  el: '#planet',
  data: {
    cardToggle: false,
    name: '',
    infos: '',
    climate: '',
    gravity: '',
    diameter: '',
    filmName: '',
    terrain: '',
    population: '',
    loading: true
  },
  methods: {
    displayPlanetInfos: function (url) {
      this.infos = ''
      this.loading = true
      var self = this;
      this.cardToggle = true;
      AJAX.get(url).then(function(response) {
        data = JSON.parse(response);
        self.name = data.name
        self.climate = data.climate
        self.gravity = data.gravity
        self.diameter = data.diameter + ' km'
        self.terrain = data.terrain
        self.population = data.population
        AJAX.get(data.films[0]).then(function(response) {
          data = JSON.parse(response);
          self.loading = false;
          self.filmName = data.title;

        }, function(error) {
          console.error("Failed!", error);
        });
      }, function(error) {
        console.error("Failed!", error);
      });
    },
    close: function () {
      this.cardToggle = false;
      this.loading = true;
    },
    setTitle: function(txt) {
      this.infos = txt;
    }
  }

})


// AJAX.get('http://swapi.co/api/planets/1/').then(function(response) {
//   data = JSON.parse(response);
//   vue.name = data.name
//   vue.climate = data.climate
//   vue.gravity = data.gravity
// }, function(error) {
//   console.error("Failed!", error);
// });


