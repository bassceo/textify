import React, { useState, useCallback } from 'react';
import {Box, Button, Menu, MenuList} from '@mui/material';
import Search from '../../Search/Search';
import SwitchButton from '../../SwitchButton/SwitchButton';
import ButtonInOut from '../../ButtonInOut/ButtonInOut';
import '../style/Settings.css';
import ButtDel from "../../ButtDel/ButtDel";

const PageSettings = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);


    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);


    return (
        <Box id="settings">
            <Button
                id="settings-button"
                aria-controls={open ? 'settings-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                ...
            </Button>
            <Menu
                id="settings-menu"
                className="settings-case"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuList className="settings-case_name">Настройки</MenuList>
                    <Search className="settings-case_search" placeholder="Поиск по файлу"/>

                    <ButtDel id="settings-case_custom-button" placeholder="Удалить проект"/>

                    <ButtDel id="settings-case_custom-button" placeholder="Цвет фона"/>

                    <ButtDel id="settings-case_custom-button" placeholder="Размер шрифта"/>

                    <ButtDel id="settings-case_custom-button" placeholder="Набор шрифтов"/>
                <MenuList id="settings-case_theme">
                    <p>Тема:</p>
                    <SwitchButton className="settings-case-theme-switch" />
                </MenuList>
                    <ButtonInOut className="settings-case_button-in-out" placeholder="Выход" />
            </Menu>
        </Box>
    );
};

export default PageSettings;