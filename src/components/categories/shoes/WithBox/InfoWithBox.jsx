import React from 'react';
import {Box} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '80%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: 24,
    padding: 5,
    borderRadius: 5,
    textAlign:'justify',
};

const InfoWithBox = () => {
    return (
        <Box sx={style}>
            <h2 style={{color: '#0d5ffe'}}>Режим заполнения по размерам</h2>
            <br/>
            <div>
                Заполнение данных если у вас нет четкой раскладки по коробам.
                У вас есть только размеры и их количества.
                Если короба используются - необходимо что б показывалось "С коробом"
            </div>
            <br/>
            <br/>
            <h2 style={{color: '#0d5ffe'}}>Режим заполнения по коробам</h2>
            <br/>
            <div>
                Заполнение данных если у вас есть данные по раскладке размеров в коробах.
                Указывайте размеры и их количество в правой части таблицы.
                Количество КОРОБОВ - это количество КОРОБОВ данного артикула с
                одинаковой раскладкой размеров внутри.
                В этом режиме - максимальное количество позиций одного размера 12 шт. в коробе.
                Если короба не используются - необходимо что б показывалось "Без короба"
            </div>
        </Box>
    );
};

export default InfoWithBox;