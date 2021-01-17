// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDis);
google.charts.setOnLoadCallback(drawAcess);
google.charts.setOnLoadCallback(drawProd);
google.charts.setOnLoadCallback(drawQual);
google.charts.setOnLoadCallback(drawEfe);
google.charts.setOnLoadCallback(drawEfi);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawDis() {

    var dataDis = new google.visualization.DataTable();
    dataDis.addColumn('string', 'Idade');
    dataDis.addColumn('number', 'Percentagem');
    dataDis.addRows([
        ['0-11 meses', 90],
        ['12-23 meses', 25],
        ['0-18 anos', 87],
        ['19-44 anos', 28],
        ['45-64 anos', 24],
        ['>= 65 anos', 8]
    ]);

    var optionsDis = {
        'title': 'Utentes inscritos por médico',
        'width': 300,
        'height': 300
    };

    var dis = new google.visualization.PieChart(document.getElementById('disponibilidade'));
    dis.draw(dataDis, optionsDis);
}

function drawAcess() {

    // Cria a tabela de dados
    var dataAcess = new google.visualization.DataTable();
    dataAcess.addColumn('string', 'Idades');
    dataAcess.addColumn('number', 'Percentagem');
    dataAcess.addRows([
        ['0-11 meses', 4],
        ['12-23 meses', 21],
        ['0-18 anos', 74],
        ['19-44 anos', 17],
        ['45-64 anos', 39],
        ['>= 65 anos', 67]
    ]);

    // Opções do gráfico
    var optionsAcess = {
        'title': 'Taxa de utilização de consultas',
        'width': 300,
        'height': 300
    };

    // Innstancia e desenha o gráfico
    var acess = new google.visualization.PieChart(document.getElementById('acessibilidade'));
    acess.draw(dataAcess, optionsAcess);
}

function drawProd() {

    var dataProd = new google.visualization.DataTable();
    dataProd.addColumn('string', 'Idades');
    dataProd.addColumn('number', 'Percentagem');
    dataProd.addRows([
        ['0-11 meses', 30],
        ['12-23 meses', 78],
        ['2-6 anos', 46],
        ['7-18 anos', 78],
        ['19-44 anos', 61],
        ['45-64 anos', 56],
        ['>= 65 anos', 67]
    ]);

    var optionsProd = {
        'title': 'Número médio de consultas',
        'width': 300,
        'height': 300
    };

    var prod = new google.visualization.PieChart(document.getElementById('produtividade'));
    prod.draw(dataProd, optionsProd);
}

function drawQual() {

    var dataQual = new google.visualization.DataTable();
    dataQual.addColumn('string', 'RefereSeA');
    dataQual.addColumn('number', 'Percentagem');
    dataQual.addRows([
        ['por utilidador', 77],
        ['em saúde do adulto', 56],
        ['em planeamento familiar', 49],
        ['em saúde materna', 51],
        ['em saúde infantil', 16],
        ['por utente', 65]
    ]);

    var optionsQual = {
        'title': 'Número médio de consultas de enfermagem',
        'width': 300,
        'height': 300
    };

    var qual = new google.visualization.PieChart(document.getElementById('qualidade'));
    qual.draw(dataQual, optionsQual);
}

function drawEfe() {

    var dataEfe = new google.visualization.DataTable();
    dataEfe.addColumn('string', 'ultima');
    dataEfe.addColumn('number', 'Percentagem');
    dataEfe.addRows([
        ['HbA1C > 9,0%', 28],
        ['LDL-C <130 mg/dL', 71],
        ['LDL-C <100 mg/dL', 51],
        ['pressão arterial <140/80 mm Hg', 48]
    ]);

    var optionsEfe = {
        'title': 'Percentagem de diabéticos com a última',
        'width': 300,
        'height': 300
    };

    var efe = new google.visualization.PieChart(document.getElementById('efectividade'));
    efe.draw(dataEfe, optionsEfe);
}

function drawEfi() {

    var dataEfi = new google.visualization.DataTable();
    dataEfi.addColumn('string', 'de');
    dataEfi.addColumn('number', 'Percentagem');
    dataEfi.addRows([
        ['de medicamentos por consulta', 97],
        ['de medicamentos por médico e por consulta', 70],
        ['de meios complementares de diagnóstico e terapêutica, por consulta', 69],
        ['o de meios complementares de diagnóstico e terapêutica, por médico e por consulta', 22]
    ]);

    var optionsEfi = {
        'title': 'Custo médio',
        'width': 300,
        'height': 300
    };

    var efi = new google.visualization.PieChart(document.getElementById('eficiencia'));
    efi.draw(dataEfi, optionsEfi);
}