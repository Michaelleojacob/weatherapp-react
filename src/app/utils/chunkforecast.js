// const mockforecast = [
//   {
//     dt: 1666828800,
//     main: {
//       temp: 286.72,
//       feels_like: 286.56,
//       temp_min: 286.72,
//       temp_max: 287.28,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1014,
//       humidity: 93,
//       temp_kf: -0.56,
//     },
//     weather: [
//       {
//         id: 801,
//         main: "Clouds",
//         description: "few clouds",
//         icon: "02n",
//       },
//     ],
//     clouds: {
//       all: 20,
//     },
//     wind: {
//       speed: 1.9,
//       deg: 160,
//       gust: 5.02,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-27 00:00:00",
//   },
//   {
//     dt: 1666839600,
//     main: {
//       temp: 286.86,
//       feels_like: 286.69,
//       temp_min: 286.86,
//       temp_max: 287.13,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1013,
//       humidity: 92,
//       temp_kf: -0.27,
//     },
//     weather: [
//       {
//         id: 802,
//         main: "Clouds",
//         description: "scattered clouds",
//         icon: "03n",
//       },
//     ],
//     clouds: {
//       all: 36,
//     },
//     wind: {
//       speed: 2.54,
//       deg: 150,
//       gust: 8.62,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-27 03:00:00",
//   },
//   {
//     dt: 1666850400,
//     main: {
//       temp: 287.37,
//       feels_like: 287.2,
//       temp_min: 287.37,
//       temp_max: 287.69,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1012,
//       humidity: 90,
//       temp_kf: -0.32,
//     },
//     weather: [
//       {
//         id: 803,
//         main: "Clouds",
//         description: "broken clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 62,
//     },
//     wind: {
//       speed: 2.91,
//       deg: 136,
//       gust: 10.16,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-27 06:00:00",
//   },
//   {
//     dt: 1666861200,
//     main: {
//       temp: 288.73,
//       feels_like: 288.46,
//       temp_min: 288.73,
//       temp_max: 288.73,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1012,
//       humidity: 81,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 3.96,
//       deg: 178,
//       gust: 11.82,
//     },
//     visibility: 10000,
//     pop: 0.19,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-27 09:00:00",
//   },
//   {
//     dt: 1666872000,
//     main: {
//       temp: 292.61,
//       feels_like: 292.36,
//       temp_min: 292.61,
//       temp_max: 292.61,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1012,
//       humidity: 67,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 98,
//     },
//     wind: {
//       speed: 5.06,
//       deg: 206,
//       gust: 11.41,
//     },
//     visibility: 10000,
//     pop: 0.16,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-27 12:00:00",
//   },
//   {
//     dt: 1666882800,
//     main: {
//       temp: 292.6,
//       feels_like: 292.43,
//       temp_min: 292.6,
//       temp_max: 292.6,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1012,
//       humidity: 70,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 92,
//     },
//     wind: {
//       speed: 4.16,
//       deg: 191,
//       gust: 9.7,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-27 15:00:00",
//   },
//   {
//     dt: 1666893600,
//     main: {
//       temp: 290.63,
//       feels_like: 290.47,
//       temp_min: 290.63,
//       temp_max: 290.63,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1012,
//       humidity: 78,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 93,
//     },
//     wind: {
//       speed: 2.81,
//       deg: 188,
//       gust: 9.03,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-27 18:00:00",
//   },
//   {
//     dt: 1666904400,
//     main: {
//       temp: 289.33,
//       feels_like: 289.22,
//       temp_min: 289.33,
//       temp_max: 289.33,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1013,
//       humidity: 85,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 803,
//         main: "Clouds",
//         description: "broken clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 78,
//     },
//     wind: {
//       speed: 1.76,
//       deg: 165,
//       gust: 3.93,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-27 21:00:00",
//   },
//   {
//     dt: 1666915200,
//     main: {
//       temp: 288.98,
//       feels_like: 288.79,
//       temp_min: 288.98,
//       temp_max: 288.98,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1012,
//       humidity: 83,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 88,
//     },
//     wind: {
//       speed: 1.72,
//       deg: 173,
//       gust: 4.94,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-28 00:00:00",
//   },
//   {
//     dt: 1666926000,
//     main: {
//       temp: 288.89,
//       feels_like: 288.74,
//       temp_min: 288.89,
//       temp_max: 288.89,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1011,
//       humidity: 85,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 1.58,
//       deg: 165,
//       gust: 1.71,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-28 03:00:00",
//   },
//   {
//     dt: 1666936800,
//     main: {
//       temp: 289.06,
//       feels_like: 288.95,
//       temp_min: 289.06,
//       temp_max: 289.06,
//       pressure: 1013,
//       sea_level: 1013,
//       grnd_level: 1010,
//       humidity: 86,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 2.94,
//       deg: 164,
//       gust: 11.13,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-28 06:00:00",
//   },
//   {
//     dt: 1666947600,
//     main: {
//       temp: 290.77,
//       feels_like: 290.49,
//       temp_min: 290.77,
//       temp_max: 290.77,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1011,
//       humidity: 73,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 4.27,
//       deg: 199,
//       gust: 12.54,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-28 09:00:00",
//   },
//   {
//     dt: 1666958400,
//     main: {
//       temp: 291.99,
//       feels_like: 291.84,
//       temp_min: 291.99,
//       temp_max: 291.99,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1013,
//       humidity: 73,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 5.73,
//       deg: 224,
//       gust: 13.06,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-28 12:00:00",
//   },
//   {
//     dt: 1666969200,
//     main: {
//       temp: 290.98,
//       feels_like: 290.49,
//       temp_min: 290.98,
//       temp_max: 290.98,
//       pressure: 1017,
//       sea_level: 1017,
//       grnd_level: 1014,
//       humidity: 64,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 3.68,
//       deg: 252,
//       gust: 6.79,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-28 15:00:00",
//   },
//   {
//     dt: 1666980000,
//     main: {
//       temp: 288.62,
//       feels_like: 288.15,
//       temp_min: 288.62,
//       temp_max: 288.62,
//       pressure: 1019,
//       sea_level: 1019,
//       grnd_level: 1016,
//       humidity: 74,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 1.93,
//       deg: 210,
//       gust: 4.71,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-28 18:00:00",
//   },
//   {
//     dt: 1666990800,
//     main: {
//       temp: 287.42,
//       feels_like: 286.89,
//       temp_min: 287.42,
//       temp_max: 287.42,
//       pressure: 1020,
//       sea_level: 1020,
//       grnd_level: 1017,
//       humidity: 76,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 1.58,
//       deg: 207,
//       gust: 4.38,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-28 21:00:00",
//   },
//   {
//     dt: 1667001600,
//     main: {
//       temp: 287.5,
//       feels_like: 287,
//       temp_min: 287.5,
//       temp_max: 287.5,
//       pressure: 1019,
//       sea_level: 1019,
//       grnd_level: 1016,
//       humidity: 77,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 1.46,
//       deg: 151,
//       gust: 3.65,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-29 00:00:00",
//   },
//   {
//     dt: 1667012400,
//     main: {
//       temp: 287.16,
//       feels_like: 286.81,
//       temp_min: 287.16,
//       temp_max: 287.16,
//       pressure: 1018,
//       sea_level: 1018,
//       grnd_level: 1015,
//       humidity: 84,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 2.31,
//       deg: 130,
//       gust: 6.87,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-29 03:00:00",
//   },
//   {
//     dt: 1667023200,
//     main: {
//       temp: 287.83,
//       feels_like: 287.68,
//       temp_min: 287.83,
//       temp_max: 287.83,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1013,
//       humidity: 89,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 3.14,
//       deg: 109,
//       gust: 10.11,
//     },
//     visibility: 10000,
//     pop: 0.06,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-29 06:00:00",
//   },
//   {
//     dt: 1667034000,
//     main: {
//       temp: 289.52,
//       feels_like: 289.35,
//       temp_min: 289.52,
//       temp_max: 289.52,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1012,
//       humidity: 82,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 2.37,
//       deg: 143,
//       gust: 7.59,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-29 09:00:00",
//   },
//   {
//     dt: 1667044800,
//     main: {
//       temp: 292.31,
//       feels_like: 292.03,
//       temp_min: 292.31,
//       temp_max: 292.31,
//       pressure: 1013,
//       sea_level: 1013,
//       grnd_level: 1010,
//       humidity: 67,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 3.31,
//       deg: 147,
//       gust: 10.15,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-29 12:00:00",
//   },
//   {
//     dt: 1667055600,
//     main: {
//       temp: 292.18,
//       feels_like: 291.89,
//       temp_min: 292.18,
//       temp_max: 292.18,
//       pressure: 1013,
//       sea_level: 1013,
//       grnd_level: 1010,
//       humidity: 67,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 4.47,
//       deg: 184,
//       gust: 10.83,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-29 15:00:00",
//   },
//   {
//     dt: 1667066400,
//     main: {
//       temp: 290.8,
//       feels_like: 290.61,
//       temp_min: 290.8,
//       temp_max: 290.8,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1011,
//       humidity: 76,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 3.71,
//       deg: 201,
//       gust: 11.65,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-29 18:00:00",
//   },
//   {
//     dt: 1667077200,
//     main: {
//       temp: 289.58,
//       feels_like: 289.42,
//       temp_min: 289.58,
//       temp_max: 289.58,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1012,
//       humidity: 82,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 2.62,
//       deg: 202,
//       gust: 8.96,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-29 21:00:00",
//   },
//   {
//     dt: 1667088000,
//     main: {
//       temp: 288.58,
//       feels_like: 288.4,
//       temp_min: 288.58,
//       temp_max: 288.58,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1012,
//       humidity: 85,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 1.99,
//       deg: 216,
//       gust: 7.52,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-30 00:00:00",
//   },
//   {
//     dt: 1667098800,
//     main: {
//       temp: 288.1,
//       feels_like: 287.82,
//       temp_min: 288.1,
//       temp_max: 288.1,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1012,
//       humidity: 83,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 2.08,
//       deg: 215,
//       gust: 6.72,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-30 03:00:00",
//   },
//   {
//     dt: 1667109600,
//     main: {
//       temp: 287.68,
//       feels_like: 287.38,
//       temp_min: 287.68,
//       temp_max: 287.68,
//       pressure: 1015,
//       sea_level: 1015,
//       grnd_level: 1012,
//       humidity: 84,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 2.14,
//       deg: 208,
//       gust: 7.27,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-30 06:00:00",
//   },
//   {
//     dt: 1667120400,
//     main: {
//       temp: 287.28,
//       feels_like: 286.89,
//       temp_min: 287.28,
//       temp_max: 287.28,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1013,
//       humidity: 82,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 500,
//         main: "Rain",
//         description: "light rain",
//         icon: "10d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 3.09,
//       deg: 217,
//       gust: 7.51,
//     },
//     visibility: 10000,
//     pop: 0.83,
//     rain: {
//       threeHours: 0.52,
//     },
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-30 09:00:00",
//   },
//   {
//     dt: 1667131200,
//     main: {
//       temp: 289.42,
//       feels_like: 288.85,
//       temp_min: 289.42,
//       temp_max: 289.42,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1013,
//       humidity: 67,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 3.96,
//       deg: 207,
//       gust: 7.55,
//     },
//     visibility: 10000,
//     pop: 0.49,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-30 12:00:00",
//   },
//   {
//     dt: 1667142000,
//     main: {
//       temp: 290.12,
//       feels_like: 289.44,
//       temp_min: 290.12,
//       temp_max: 290.12,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1013,
//       humidity: 60,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 803,
//         main: "Clouds",
//         description: "broken clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 65,
//     },
//     wind: {
//       speed: 4.41,
//       deg: 206,
//       gust: 8.69,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-30 15:00:00",
//   },
//   {
//     dt: 1667152800,
//     main: {
//       temp: 287.6,
//       feels_like: 287.16,
//       temp_min: 287.6,
//       temp_max: 287.6,
//       pressure: 1017,
//       sea_level: 1017,
//       grnd_level: 1014,
//       humidity: 79,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 803,
//         main: "Clouds",
//         description: "broken clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 54,
//     },
//     wind: {
//       speed: 3.87,
//       deg: 199,
//       gust: 10.18,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-30 18:00:00",
//   },
//   {
//     dt: 1667163600,
//     main: {
//       temp: 287.01,
//       feels_like: 286.54,
//       temp_min: 287.01,
//       temp_max: 287.01,
//       pressure: 1017,
//       sea_level: 1017,
//       grnd_level: 1014,
//       humidity: 80,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 801,
//         main: "Clouds",
//         description: "few clouds",
//         icon: "02n",
//       },
//     ],
//     clouds: {
//       all: 22,
//     },
//     wind: {
//       speed: 3.22,
//       deg: 173,
//       gust: 10.44,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-30 21:00:00",
//   },
//   {
//     dt: 1667174400,
//     main: {
//       temp: 286.99,
//       feels_like: 286.62,
//       temp_min: 286.99,
//       temp_max: 286.99,
//       pressure: 1016,
//       sea_level: 1016,
//       grnd_level: 1013,
//       humidity: 84,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 802,
//         main: "Clouds",
//         description: "scattered clouds",
//         icon: "03n",
//       },
//     ],
//     clouds: {
//       all: 40,
//     },
//     wind: {
//       speed: 3.83,
//       deg: 172,
//       gust: 10.93,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-31 00:00:00",
//   },
//   {
//     dt: 1667185200,
//     main: {
//       temp: 286.61,
//       feels_like: 286.31,
//       temp_min: 286.61,
//       temp_max: 286.61,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1011,
//       humidity: 88,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 86,
//     },
//     wind: {
//       speed: 3.86,
//       deg: 162,
//       gust: 10.86,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-31 03:00:00",
//   },
//   {
//     dt: 1667196000,
//     main: {
//       temp: 286.6,
//       feels_like: 286.3,
//       temp_min: 286.6,
//       temp_max: 286.6,
//       pressure: 1012,
//       sea_level: 1012,
//       grnd_level: 1009,
//       humidity: 88,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04n",
//       },
//     ],
//     clouds: {
//       all: 93,
//     },
//     wind: {
//       speed: 4.18,
//       deg: 149,
//       gust: 12.47,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-31 06:00:00",
//   },
//   {
//     dt: 1667206800,
//     main: {
//       temp: 288.62,
//       feels_like: 288.36,
//       temp_min: 288.62,
//       temp_max: 288.62,
//       pressure: 1009,
//       sea_level: 1009,
//       grnd_level: 1006,
//       humidity: 82,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 5.33,
//       deg: 151,
//       gust: 14.62,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-31 09:00:00",
//   },
//   {
//     dt: 1667217600,
//     main: {
//       temp: 289.47,
//       feels_like: 289.06,
//       temp_min: 289.47,
//       temp_max: 289.47,
//       pressure: 1005,
//       sea_level: 1005,
//       grnd_level: 1003,
//       humidity: 73,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 5.89,
//       deg: 165,
//       gust: 14.92,
//     },
//     visibility: 10000,
//     pop: 0.08,
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-31 12:00:00",
//   },
//   {
//     dt: 1667228400,
//     main: {
//       temp: 288.12,
//       feels_like: 288,
//       temp_min: 288.12,
//       temp_max: 288.12,
//       pressure: 1004,
//       sea_level: 1004,
//       grnd_level: 1002,
//       humidity: 89,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 500,
//         main: "Rain",
//         description: "light rain",
//         icon: "10d",
//       },
//     ],
//     clouds: {
//       all: 100,
//     },
//     wind: {
//       speed: 5.6,
//       deg: 206,
//       gust: 11.73,
//     },
//     visibility: 4517,
//     pop: 1,
//     rain: {
//       threeHours: 2.42,
//     },
//     sys: {
//       pod: "d",
//     },
//     dt_txt: "2022-10-31 15:00:00",
//   },
//   {
//     dt: 1667239200,
//     main: {
//       temp: 284.91,
//       feels_like: 284.13,
//       temp_min: 284.91,
//       temp_max: 284.91,
//       pressure: 1010,
//       sea_level: 1010,
//       grnd_level: 1007,
//       humidity: 76,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 500,
//         main: "Rain",
//         description: "light rain",
//         icon: "10n",
//       },
//     ],
//     clouds: {
//       all: 94,
//     },
//     wind: {
//       speed: 5.95,
//       deg: 238,
//       gust: 12.86,
//     },
//     visibility: 10000,
//     pop: 1,
//     rain: {
//       threeHours: 2.89,
//     },
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-31 18:00:00",
//   },
//   {
//     dt: 1667250000,
//     main: {
//       temp: 284.8,
//       feels_like: 283.93,
//       temp_min: 284.8,
//       temp_max: 284.8,
//       pressure: 1014,
//       sea_level: 1014,
//       grnd_level: 1011,
//       humidity: 73,
//       temp_kf: 0,
//     },
//     weather: [
//       {
//         id: 800,
//         main: "Clear",
//         description: "clear sky",
//         icon: "01n",
//       },
//     ],
//     clouds: {
//       all: 0,
//     },
//     wind: {
//       speed: 6.05,
//       deg: 232,
//       gust: 13.23,
//     },
//     visibility: 10000,
//     pop: 0,
//     sys: {
//       pod: "n",
//     },
//     dt_txt: "2022-10-31 21:00:00",
//   },
// ];

const chunkforecast = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const dt = arr[i].dt_txt.split(" ")[0];
    if (map.has(dt)) {
      map.set(dt, [...map.get(dt), arr[i]]);
    } else {
      map.set(dt, [arr[i]]);
    }
  }
  return map;
};

export default chunkforecast;
