import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './ItemPanel.scss';
import PropTypes from 'prop-types';

const ItemPanel = ({
    imageSrc,
    items,
    onClick = () => {},
}) => {
     const [selectedIndex, setSelectedIndex] = useState(null);

     const handleItemClick = (index) => {
        if (selectedIndex === index) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(index);
        }
        onClick(index); 
    };

    return (
        <Box className="panel-box">
            <List>
                {items.map((item, index) => (
                    <ListItem key={index} className="panel-list-item"
                    sx={{ width: '173.06px',
                        padding: '0'}}
                    >
                        <ListItemButton
                            className={`panel-list-item_button ${selectedIndex === index ? 'active' : ''}`}
                            onClick={() => handleItemClick(index)}
                            sx={{
                                paddingLeft: 0,
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.08)', 
                                }
                            }}
                        >
                            <img
                                src={imageSrc}
                                className="panel-image"
                                alt="item"
                            />
                            <ListItemText
                                primary={item.title}
                                secondary={item.description}
                                className="panel-list-item_text"
                                sx={{
                                    '& .MuiTypography-body1': {
                                        fontFamily: 'SF Compact Rounded, sans-serif',
                                    },
                                    '& .MuiTypography-body2': {
                                        marginTop: '3.5px',
                                        fontSize: '9px',
                                        fontFamily: 'SF Compact Rounded, sans-serif',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

ItemPanel.propTypes = {
    imageSrc: PropTypes.string, 
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,   
            description: PropTypes.string.isRequired  
        })
    ).isRequired,  
    onClick: PropTypes.func,  
};

export default ItemPanel;
