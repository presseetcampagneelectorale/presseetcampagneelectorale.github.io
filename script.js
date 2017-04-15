$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})

//Hover text sous les images

$('.intro-img img').hover( function() {
    $('.hover-text').eq($('.intro-img img').index($(this))).show();
 } , function() {
    $('.hover-text').eq($('.intro-img img').index($(this))).hide();
 });

//Graphique numéro 1 : volume d'articles global

Highcharts.chart('container0', {
    chart: {
        type: 'bar'
    },
    title: {
        text: "Volume d'articles pour les 5 favoris"
    },

    xAxis: {
        categories: ['Fillon', "Macron,",'Hamon', 'Le Pen', 'Mélenchon'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: "Nombre d'articles publiés",
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' articles'
    },
    plotOptions: {
        series: {
                        colorByPoint: true
                    }

    },

    colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE'],

    credits: {
        enabled: false
    },
    series: [{
        name: "Couverture médiatique depuis début 2017",
        data: [2622,1730,1510,1150,674]
    }]
});



//Graphique numéro 3
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Traitement médiatique du Figaro'
    },
    subtitle: {
        text: "Proportion d'articles sortis par semaine"
    },
    xAxis: {
        title:{
          text: "Semaine de 2017"
        },
        categories: ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10', '11', '12']
    },
    yAxis: {
        title: {
            text: "Volume d'articles"
        }
    },
    tooltip: {
        pointFormat : "{series.name}: <b>{point.y}</b><br/>",
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Fillon',
        marker: {
            symbol: 'square'
        },

        data: [2,2,{
            y: 3, //Pour l'endroit où mettre l'étoile. Le mettre là où on veut attention.
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
                label: "gsgse"}
                },6,17,13,14,6,30,28,26,5],
                color : "#4169E1"

    },

    {
        name: 'Hamon',
        marker: {
            symbol: 'circle'
        },
        data: [3,5,5,20,24,14,14,22,13,27,28,16],
        color : "#008000"
    },

    {
        visible : false,
        name: 'Le Pen',
        marker: {
            symbol: 'triangle'
        },
        data: [4,0,9,4,14,16,12,31,26,24,12,18],
        color : "#00008B"
    },

    {
        visible : false,
        name: 'Macron',
        marker: {
            symbol: 'diamond'
        },
        data: [ 3,3,5,1,10,8,22,35,29,13,24,12],
        color : "#FFA500",
    },

    {
        visible : false,
        name: 'Mélenchon',
        marker: {
            symbol: 'diamond'
        },
        data: [7,6,3,8,14,17,7,24,5,9,24,4],
        color:"#FF0000"
    }
    ]
});


//Création des onglets pour la partie 1//

function change_onglet(name)
                {
                        document.getElementById('onglet_'+anc_onglet).className = 'onglet_0 onglet';
                        document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
                        //document.getElementById('contenu_onglet_'+anc_onglet).style.visibility = 'invisible';
                        document.getElementById('contenu_onglet_'+name).style.display = 'block';
                        anc_onglet = name;
                }

var anc_onglet = 'figaro';
                change_onglet(anc_onglet);
