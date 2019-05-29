const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters?nation=$';

const api = {
    getCharacters() {
        return fetch(`${URL}`)
            .then(response => response.json());
    }
};

export default api;