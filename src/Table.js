import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Exercise</th>
                <th>Weight</th>
                <th>Repetitions</th>
                <th>Sets</th>
                <th>RPE/Load</th>
                <th>Top Set</th>
                <th>Rating</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.exercise}</td>
                <td>{row.weight}</td>
                <td>{row.repetition}</td>
                <td>{row.sets}</td>
                <td>{row.rpe}</td>
                <td>{row.topset}</td>
                <td>{row.rating}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;