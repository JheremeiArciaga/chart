const ctx = document.getElementById('barchart').getContext('2d');
const barchart =new Chart (ctx,{
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        
        label: '# of Votes',
        data: [12, 19, 7, 15, 10, 17],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192 )',
            'rgb(255, 205, 86 )',
            'rgb(0, 128, 0 )',
            'rgb(153, 102, 255 )',
            'rgb(239, 108, 0 )',
            'rgb(201, 203, 207 )'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(0, 128, 0)',
            'rgb(153, 102, 255)',
            'rgb(255, 213, 79)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });