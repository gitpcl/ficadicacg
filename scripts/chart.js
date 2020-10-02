var ctx = document.getElementById('audienceSplit');
var audienceSplit = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Amigos, Família & Relacionamentos', 'Beleza & Cosméticos', 'Roupas, Sapatos, Bolsas & Acessórios', 'Restaurantes, Comida & Mercado', 'Brinquedo, Crianças & Bebês',],
        datasets: [{
            label: 'Interesses',
            data: [34.06, 29.92, 22.95, 21.56, 17.82],
            backgroundColor: [
                'rgba(51, 12, 45, 1)',
                'rgba(250, 0, 110, 1)',
                'rgba(250, 0, 110, 0.8)',
                'rgba(250, 0, 110, 0.6)',
                'rgba(250, 0, 110, 0.4)'
            ],
            borderColor: [
                'rgba(51, 12, 45, 1)',
                'rgba(250, 0, 110, 1)',
                'rgba(250, 0, 110, 0.8)',
                'rgba(250, 0, 110, 0.6)',
                'rgba(250, 0, 110, 0.4)'
            ],
            borderWidth: 0
        }]
    }
    
});

var ctx = document.getElementById('genderSplit');
var genderSplit = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Homens', 'Mulheres'],
        datasets: [{
            label: 'Sexo dos seguidores',
            data: [23, 77],
            backgroundColor: [
                'rgba(51, 12, 45, 1)',
                'rgba(250, 0, 110, 1)'
            ],
            borderColor: [
                'rgba(51, 12, 45, 0)',
                'rgba(250, 0, 110, 0)'
            ],
            borderWidth: 0
        }]
    }
});

var ctx = document.getElementById('cities');
var cities = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Campo Grande', 'Dourados', 'Três Lagoas', 'Outros'],
        datasets: [{
            label: '% de seguidores',
            data: [77, 5, 3, 20],
            backgroundColor: [
                'rgba(250, 0, 110, 1)',
                'rgba(51, 12, 45, 0.6)',
                'rgba(51, 12, 45, 0.8)',
                'rgba(51, 12, 45, 1)'
            ],
            borderColor: [
                'rgba(250, 0, 110, 0)',
                'rgba(51, 12, 45, 0)',
                'rgba(51, 12, 45, 0)',
                'rgba(51, 12, 45, 0)'
            ],
            borderWidth: 0
        }]
    }
});

var ctx = document.getElementById('age');
var age = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64','65+'],
        datasets: [{
            label: 'Idade dos seguidores',
            data: [1.7, 20, 41, 24, 8.9, 3.1,0.9],
            backgroundColor: [
                'rgba(51, 12, 45, 1)',
                'rgba(51, 12, 45, 1)',
                'rgba(250, 0, 110, 1)',
                'rgba(250, 0, 110, 1)',
                'rgba(51, 12, 45, 1)',
                'rgba(51, 12, 45, 1)',
                'rgba(51, 12, 45, 1)'
            ],
            borderColor: [
                'rgba(250, 0, 110, 0)',
                'rgba(250, 0, 110, 0)',
                'rgba(250, 0, 110, 0)',
                'rgba(250, 0, 110, 0)',
                'rgba(250, 0, 110, 0)',
                'rgba(250, 0, 110, 0)',
                'rgba(250, 0, 110, 0)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});