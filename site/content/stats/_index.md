---
title: stats
logo: "/img/logo-inverted.svg"
---

Stats 

<!-- {{< chart 90 200 >}}
{
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar Chart',
            data: [12, 19, 18, 16, 13, 14],
            pointRadius: 0,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}
{{< /chart >}} -->

<!-- 


{{< chart 200 300 >}}
{
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'danvir_guram',
            pointRadius: 0,
            data: [
                {
                    "x" : "2023-04-23T15:59:55Z",
                    "y" : 183.0
                },
                {
                    "x" : "2023-04-26T12:37:05Z",
                    "y" : 189.0
                },
                {
                    "x" : "2023-04-28T13:10:33Z",
                    "y" : 176.0
                },
                {
                    "x" : "2023-04-29T12:16:25Z",
                    "y" : 182.0
                },
                {
                    "x" : "2023-05-05T13:36:02Z",
                    "y" : 188.0
                },
                {
                    "x" : "2023-05-22T18:00:33Z",
                    "y" : 191.0
                },
                {
                    "x" : "2023-05-22T18:36:59Z",
                    "y" : 193.0
                },
                {
                    "x" : "2023-06-02T14:17:09Z",
                    "y" : 175.0
                },
                {
                    "x" : "2023-06-04T09:37:00Z",
                    "y" : 187.0
                },
                {
                    "x" : "2023-06-04T10:45:19Z",
                    "y" : 178.0
                },
                {
                    "x" : "2023-06-05T17:53:03Z",
                    "y" : 182.0
                },
                {
                    "x" : "2023-06-06T14:42:17Z",
                    "y" : 181.0
                },
                {
                    "x" : "2023-06-10T10:29:06Z",
                    "y" : 190.0
                },
                {
                    "x" : "2023-06-13T14:51:41Z",
                    "y" : 184.0
                },
                {
                    "x" : "2023-06-14T18:42:43Z",
                    "y" : 182.0
                },
                {
                    "x" : "2023-06-19T18:24:02Z",
                    "y" : 184.0
                },
                {
                    "x" : "2023-07-09T09:18:15Z",
                    "y" : 192.0
                },
                {
                    "x" : "2023-07-09T11:45:41Z",
                    "y" : 196.0
                },
                {
                    "x" : "2023-07-12T12:36:09Z",
                    "y" : 180.0
                },
                {
                    "x" : "2023-07-15T10:03:16Z",
                    "y" : 188.0
                }
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false,
            fillColor: 'rgba(13, 102, 5, 1)',
        }]
    },
    options: {
        plugins: {
            annotation: {
                annotations: {
                    trendAnnotation
                }
            }
        },
        maintainAspectRatio: true,
        tension: 0.2,
        lemon: 'sad',
        scales: {
            y: {
                min: 150,
                max: 220,
                ticks: {
                    callback: function(value, index, ticks) {
                        return  value + ' bpm';
                    }
                }
            },
            x: {
                type: 'time', // other option: timeseries
                time: {
                    unit: 'month'
                }
            }
        }
    }
}
{{< /chart >}}
 --><!-- 
            trendlineLinear: {
                lineStyle: "solid", // |dotted
                width: 2,
                projection: true,
            }
 -->
