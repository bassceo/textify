import imageSrc from "./widgets/catalog/img.png"; 
import ItemPanel from "./widgets/catalog/ItemPanel";

const App = () => {
    const items = [
        { title: 'qw', description: 'Short description 1' },
        { title: 'wqdwqd', description: 'Short description 2' },
        { title: 'tyjhrgewq', description: 'Short description 3' },
        { title: 'mnbvc', description: 'Short description 4' },
        { title: 'mnbvc', description: 'Short description 4' },
        { title: 'mnbvc', description: 'Short description 4' },
        { title: 'mnbvc', description: 'Short description 4' },
        { title: 'mnbvc', description: 'Short description 4' },
    ];

    const handleItemClick = (index) => {
        console.log('Item clicked:', index);
    };

    return (
        <>
            <ItemPanel items={items} imageSrc={imageSrc} onClick={handleItemClick} />
        </>
    );
};

export default App;
