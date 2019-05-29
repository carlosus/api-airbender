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

        api.getCharacters()
            .then(charactersData => {
                list.update({ characters: charactersData });
            })
            .finally(() => {
                loading.update({ done: false });
            });
        
        const loading = new Loading({ done: true });
        const loadingDOM = loading.render();

        const main = dom.querySelector('main');

        dom.prepend(headerDOM);
        main.appendChild(loadingDOM);
        main.appendChild(listDOM);

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