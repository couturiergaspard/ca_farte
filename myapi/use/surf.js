let url = "https://marine-api.open-meteo.com/v1/marine?latitude=45.00&longitude=-1.19&hourly=wave_height&daily=wave_height_max,wave_direction_dominant,wave_period_max,wind_wave_direction_dominant&timezone=Europe%2FLondon"
fetch(url).then((response) => 
    response.json().then(data => {
        console.log(data);
        document.querySelector('#heightWave').innerHTML =
            "Les vagues sont de Hauteur: " + data.hourly.wave_height[0];
        document.querySelector('#maxHeightWave').innerHTML =
            "La plus grande Vague faisait: " + data.daily.wave_height_max[0];
        document.querySelector('#period').innerHTML =
            "La periode max etait de: " + data.daily.wave_period_max[0] + " s";
        document.querySelector('#wind_direction').innerHTML =
            "Le vent a une direction dominante: " + angleConverter(data.daily.wind_wave_direction_dominant[0]);
        document.querySelector('#wave_direction').innerHTML =
            "Les vagues ont direction dominante: " + angleConverter(data.daily.wave_direction_dominant[0]);
    }));

    function angleConverter(myAngle) {
        const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SO', '← O', '↖ NO'];
        return directions[Math.round(myAngle / 45) % 8];
    }