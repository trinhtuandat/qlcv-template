$(function () {
    var line = new Morris.Line({
        element: 'line-chartEmployees',
        resize: true,
        data: [{
                y: '2018-12',
                item1: 85
            },
            {
                y: '2019-01',
                item1: 89
            },
            {
                y: '2019-02',
                item1: 82
            },
            {
                y: '2019-03',
                item1: 96
            },
            {
                y: '2019-04',
                item1: 100
            },
            {
                y: '2019-05',
                item1: 112
            },
            {
                y: '2019-06',
                item1: 120
            },
            {
                y: '2019-07',
                item1: 96
            },
            {
                y: '2019-08',
                item1: 82
            },
            {
                y: '2019-09',
                item1: 96
            },
            {
                y: '2019-10',
                item1: 100
            },
            {
                y: '2019-11',
                item1: 112
            },
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Số Nhân viên'],
        lineColors: ['#3c8dbc'],
        hideHover: 'auto'
    });



    var bar_data = {
        data: [
            ['2019-06', 120],
            ['2019-07', 56],
            ['2019-08', 82],
            ['2019-09', 96],
            ['2019-10', 100],
            ['2019-11', 112],
        ],
        color: '#3c8dbc'
    }
    $.plot('#bar-chartEmployees', [bar_data], {
        grid: {
            borderWidth: 1,
            borderColor: '#f3f3f3',
            tickColor: '#f3f3f3'
        },
        series: {
            bars: {
                show: true,
                barWidth: 0.5,
                align: 'center'
            }
        },
        xaxis: {
            mode: 'categories',
            tickLength: 0
        }
    })
})