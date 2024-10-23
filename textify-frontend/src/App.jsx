
import ActionBar from "./widgets/header/action-bar/ActionBar";

const App = () =>  {
    const users = [
        { id: 0, name: '1hort description' },
        { id: 2, name: '2hort description' },
        { id: 3, name: '3hort description' },
        { id: 4, name: '4hort description' },
        { id: 5, name: '5hort description' },
        { id: 6, name: '6hort description' },
    ];
    const handleClick = (index) => {
        console.log('Clicked item index:', index);  
    };
    return <>
        <ActionBar users={users} onClick={handleClick} />
    </>;
}

export default App;