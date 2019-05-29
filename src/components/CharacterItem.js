import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        const photoUrl = character.photoUrl || '../../assets/placeholder.png';
    
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${photoUrl}" alt="${character.name}">
            </li>
        `;
    }
}

export default CharacterItem;

