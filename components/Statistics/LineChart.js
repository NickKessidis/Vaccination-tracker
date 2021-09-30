const LineChart = (patientsPfizer20, patientsAstraZeneca20, patientsJohnson20, patientsModerna20,
                  patientsPfizer30, patientsAstraZeneca30, patientsJohnson30, patientsModerna30,
                  patientsPfizer40, patientsAstraZeneca40, patientsJohnson40, patientsModerna40,
                  patientsPfizer50, patientsAstraZeneca50, patientsJohnson50, patientsModerna50,
                  patientsPfizer60, patientsAstraZeneca60, patientsJohnson60, patientsModerna60,
                  patientsPfizer70, patientsAstraZeneca70, patientsJohnson70, patientsModerna70,
                  patientsPfizer80, patientsAstraZeneca80, patientsJohnson80, patientsModerna80,
                  patientsPfizer90, patientsAstraZeneca90, patientsJohnson90, patientsModerna90,
                  patientsPfizer100, patientsAstraZeneca100, patientsJohnson100, patientsModerna100) => {
  
  return ({
    data: {
      labels: [
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90", 
        "100",
      ],
      datasets: [
        {
          data: [patientsPfizer20, 
                patientsPfizer30, 
                patientsPfizer40, 
                patientsPfizer50, 
                patientsPfizer60, 
                patientsPfizer70, 
                patientsPfizer80, 
                patientsPfizer90, 
                patientsPfizer100],
          label: "Pfizer",
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        },
        {
          data: [patientsAstraZeneca20, 
                patientsAstraZeneca30, 
                patientsAstraZeneca40, 
                patientsAstraZeneca50, 
                patientsAstraZeneca60, 
                patientsAstraZeneca70, 
                patientsAstraZeneca80, 
                patientsAstraZeneca90, 
                patientsAstraZeneca100],
          label: "AstraZeneca",
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        },
        {
          data: [patientsJohnson20, 
                patientsJohnson30, 
                patientsJohnson40, 
                patientsJohnson50, 
                patientsJohnson60, 
                patientsJohnson70, 
                patientsJohnson80, 
                patientsJohnson90, 
                patientsJohnson100],
          label: "Johnson & Johnson",
          fill: false,
          borderColor: "#144db8",
          backgroundColor: "transparent",
          pointBorderColor: "#144db8",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        },
        {
          data: [patientsModerna20, 
                patientsModerna30, 
                patientsModerna40, 
                patientsModerna50, 
                patientsModerna60, 
                patientsModerna70, 
                patientsModerna80, 
                patientsModerna90, 
                patientsModerna100],
          label: "Moderna",
          fill: false,
          borderColor: "#b81c14",
          backgroundColor: "transparent",
          pointBorderColor: "#b81c14",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        },
      ],
    },
    options: {
      legend: {
        display: false,
        position: "top",
      },
    },
  })
};

module.exports = { LineChart };
  