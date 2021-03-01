// Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.

const names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]; // declare names 

const People = () => (
    <ul className="list-group">
        { names.map((name, index) => (
            <li className="list-group-item" key={ index }>{ name }</li>
        )) }
    </ul>
);

export default People;

