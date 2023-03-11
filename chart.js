// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     const chart = document.querySelector('.chart');

//     for (let i = 0; i < data.length; i++) {
//       const div = document.createElement('div');
//       chart.appendChild(div);
//       const bar = document.createElement('div');
//       bar.classList.add('bar');
//       bar.style.height = data[i].amount + 'px';
//       div.appendChild(bar);
//       // const label = 
//     }
//   })
//   .catch(error => console.error(error));


$(document).ready(function() {
  $.getJSON('data.json', function(data) {
      var html = "";
      var arr = [];
      for(let i = 0; i< data.length; i++)
      {
        arr.push(data[i].amount);
      }
      var max = Math.max(...arr);

      for(let i = 0; i< data.length; i++)
      {
        html += "<div class='bars'>";
        if(max == data[i].amount)
        {
          html += "<div class='bar bar_high' style= 'height:"+ data[i].amount * 3 +"px' data-barValue="+data[i].amount+"></div>";
        }
        else
        {
          html += "<div class='bar' style= 'height:"+ data[i].amount * 3 +"px' data-barValue="+data[i].amount+"></div>";
        }
        html += "<div class='label'>"+data[i].day+"</div>";
        html += "</div>";  
      }
      $('.chart').html(html);
  });
});