import Component from './Component.js';

class Search extends Component {
    render() {
        const form = this.renderDOM();
        
        form.addEventListener('input', () => {
            const value = form.elements['element'].value;
            const searchParams = new URLSearchParams();
            
            searchParams.set('nation', value);
            window.location.hash = '?' + searchParams.toString();
        });
        return form;
    }
    renderTemplate() {
        return /*html*/`
            <form>
                <fieldset>
                <legend>Filter by Nation:</legend>

                <input type="radio" id="air" name="element" value="air">
                <label for="air">Air Nation</label><br/>

                <input type="radio" id="fire" name="element" value="fire">
                <label for="fire">Fire Nation</label><br/>

                <input type="radio" id="water" name="element" value="water">
                <label for="water">Water Nation</label><br/>

                <input type="radio" id="earth" name="element" value="earth">
                <label for="earth">Earth Nation</label><br/>
            </form> 
        `;
    }
}

export default Search;