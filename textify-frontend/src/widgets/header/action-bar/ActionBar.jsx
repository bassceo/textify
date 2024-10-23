import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './ActionBar.scss';
import PropTypes from 'prop-types';

const ActionBar = ({
    users,
    onClick = () => {},
}) => {
    const pages = ['Отправить', 'Экспортировать', '...'];

    const colors = ['#4C84EA', '#2B8643', '#0751D8'];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const calculateMarginLeft = (userCount) => {
        return `${Math.min(userCount, 4) * 21 + 8}px`;
    };

     const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  
        }
        return array;
    };

     
    const randomUsers = shuffleArray([...users]).slice(0, 4);

    const handleClick = (index) => {
        onClick(index);
    }

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "transparent",
                width: '345.5px',
                height: '31px',
                boxShadow: 'none',
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    width: '100%',
                    padding: '0 !important',
                }}
            >
                <Toolbar disableGutters>
                    <Box>
                        {randomUsers.map((user, index) => (
                            <Button
                                key={user.id}
                                className="user-button"
                                sx={{
                                    color: 'white',
                                    display: 'block',
                                    height: '31px',
                                    minWidth: '31px',
                                    padding: 0,
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    zIndex: 1,
                                    backgroundColor: getRandomColor(),
                                    left: `${index * 21}px`,
                                }}
                            >
                                {user.name.charAt(0)}
                            </Button>
                        ))}

                        <Box
                            className="main-buttons-container"
                            style={{ marginLeft: calculateMarginLeft(randomUsers.length) }}
                        >
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    className={`main-button ${page === '...' ? 'three-dots-button' : ''}`}
                                    sx={{
                                        color: 'black',
                                        display: 'block',
                                        height: '31px',
                                        minWidth: 'auto',
                                        padding: '0 10px',
                                        textTransform: 'none',
                                        marginLeft: '8px',
                                    }}
                                    onClick={() => (handleClick(index))}
                                >
                                    {page === '...' ? (
                                        <span className="dots-container">
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </span>)
                                        : (page)}

                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

ActionBar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClick: PropTypes.func,   
};

export default ActionBar;
