const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '71ba711744mshdb0d419fc13c5c4p1a57b7jsn7676f1deca6a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

