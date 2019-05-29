import CharacterItem from '../src/components/CharacterItem.js';

const test = QUnit.test;

QUnit.module('Character Item');

test('make item from data', assert => {
    const character = {
        name: '46th Earth King',
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
    };

    const characterItem = new CharacterItem({ character });
    const characterItemDOM = characterItem.renderTemplate();

    assert.htmlEqual(characterItemDOM, /*html*/ `
        <li>
            <h2>46th Earth King</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        </li>
    `);
}); 
