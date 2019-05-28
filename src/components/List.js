import Component from './Component.js';

class List extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul>
                <li>
                    <h2>46th Earth King</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
                    <p>Affiliation: Earth Kingdom Earth Kingdom Royal Family</p>
                </li>
                <li>
                    <h2>Amon</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/0/00/Amon_and_his_Equalists.png/revision/latest?cb=20160219113422" alt="Amon">
                    <p>Affiliation: Equalists (formerly) Northern Water Tribe (formerly)</p>
                </li>
                <li>
                    <h2>Azula's Ship Captain</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/b/bc/Azula%27s_ship_captain.png/revision/latest?cb=20130625131841" alt="Azula's Ship Captain">
                    <p>Affiliation: Fire Nation Navy</p>
                </li>
                <li>
                    <h2>Banished Servant</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/4/48/Banished_servant.png/revision/latest?cb=20120222022610" alt="Banished Servant">
                    <p>Affiliation: Fire Nation Royal Family (formerly) Azula's servants (formerly)</p>
                </li>
            </ul>
        `;
    }
}

export default List;