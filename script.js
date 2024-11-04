// Espera o carregamento do DOM para garantir que tudo esteja pronto
window.onload = () => {
    // Configuração do gráfico de pizza para crescimento das plantas
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    const growthChart = new Chart(growthCtx, {
        type: 'pie', // Definindo o tipo de gráfico como pizza
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
            datasets: [{
                label: 'Crescimento em cm',
                data: [12, 18, 24, 30, 35],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });

    // Configuração do gráfico de pizza para consumo de água
    const waterCtx = document.getElementById('waterChart').getContext('2d');
    const waterChart = new Chart(waterCtx, {
        type: 'pie',
        data: {
            labels: ['Aloe Vera', 'Cacto', 'Samambaia', 'Manjericão', 'Suculenta'],
            datasets: [{
                label: 'Consumo de Água (L)',
                data: [2.5, 3.2, 2.8, 3.6, 3.1],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
};
