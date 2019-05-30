import Component from './Component.js';
import Header from './Header.js';
import List from './List.js';
import Loading from './Loading.js';
import api from '../services/api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const list = new List({ characters: [] });
        const listDOM = list.render();
        
        const loading = new Loading({ done: true });
        const loadingDOM = loading.render();
        
        const main = dom.querySelector('main');
        
        dom.prepend(headerDOM);
        main.appendChild(loadingDOM);
        main.appendChild(listDOM);
        
        function loadCharacters() {
            const params = window.location.hash.slice(1);

            api.getCharacters(params)
                .then(charactersData => {
                    list.update({ characters: charactersData });
                })
                .finally(() => {
                    loading.update({ done: false });
                });
        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;