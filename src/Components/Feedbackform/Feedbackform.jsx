import S from './Feedbackform.module.css';

export function Feedbackform(props) {
    return (
        <div className={S.container}>
            <div className={S.group}>
                <input type="text" placeholder="Ваше имя" className={S.input} />
            </div>
            <div className={S.group}>
                <input type="email" placeholder="Email" className={S.input} />
            </div>
            <div className={S.group}>
                <textarea placeholder="Ваше сообщение" className={S.input} />
            </div>
             <div className={S.group}>
                <label>
                    <input type="checkbox" />
                    Принимаю политику обработки данных
                </label>
             </div>
        </div>
    );
}