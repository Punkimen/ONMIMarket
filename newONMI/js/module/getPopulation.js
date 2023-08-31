export const getPopulation = async () => {
    const url = 'https://get-population.p.rapidapi.com/population';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e12bb9f3bmshe4bcd0e22d029b7p1ff39fjsne2c29f6e9eda',
            'X-RapidAPI-Host': 'get-population.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result
    } catch (error) {
        return error
    }
}
