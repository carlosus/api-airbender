import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
                <p>${character.affiliation}</p>
            </li>
        `;
    }
}

export default CharacterItem;

