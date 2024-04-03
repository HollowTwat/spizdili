import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";
import CategoryHeader from "../../components/UI/Headers/CategoryHeader";
import {error} from "../../styles/colors";
import {formStyle} from "../../styles/form";
import Button from "../../components/UI/Button";

const OrderError = () => {

    const navigate = useNavigate();
    const { tg } = useTelegram();

    useEffect(() => {

        window.scrollTo(0, 0);
        tg.BackButton.hide();
        tg.MainButton.hide()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleToMainPage = () => {
        navigate('/')
    }

    const handleCloseWebApp = () => {
        tg.close()
    }

    return (
        <div>
            <CategoryHeader backgroundColor={error}/>
            <div style={formStyle}>
                <div style={{textAlign: 'center'}}>
                    <h1>Ошибка!</h1>
                    <h2>К сожалению, при оформелении заказа произошла ошибка!</h2>
                </div>
                <h4 style={{textAlign: 'center', marginTop: 50}}>
                    Наш менеджер в скором времени изучит произошедщую проблему и свяжется с Вами!
                </h4>
            </div>
            <div style={{position: 'fixed', padding: 20, bottom: 0}}>
                <Button onClick={handleToMainPage}>Сделать новый заказ</Button>
                <Button onClick={handleCloseWebApp}>Вернуться в Telegram</Button>
            </div>
        </div>
    );
};

export default OrderError;