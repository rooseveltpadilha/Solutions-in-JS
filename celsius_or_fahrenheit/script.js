// Função para fazer a conversão de Fahrenheit para Celsius e vice-versa

const convertTemperature = (value) => {
    if(value.includes('F' || 'f')) {
        newValue = value.slice(0, -2);
        let temperature = ((newValue - 32)*5)/9;
        return temperature.toFixed(2)+' ºC';     
    } else if (value.includes('C' || 'c')) {
        newValue = value.slice(0, -2);
        let temperature = ((newValue*9)/5) + 32;
        return temperature.toFixed(2)+' ºF';
    }
};