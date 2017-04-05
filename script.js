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