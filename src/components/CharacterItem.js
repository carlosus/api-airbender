import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        const photoUrl = character.photoUrl || '../../assets/placeholder.png';
        
        const enemiesLink = new URLSearchParams();
        enemiesLink.set('enemies', character.name);

        const alliesLink = new URLSearchParams();
        alliesLink.set('allies', character.name);

        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${photoUrl}" alt="${character.name}">
                <div>
                    <a href="#?${enemiesLink.toString()}">Enemies</a>
                    <a href="#?${alliesLink.toString()}">Allies</a>
                </div>
            </li>
        `;
    }
}

export default CharacterItem;

