import s from '../Content.module.css';

const Intro = () => {
    return<div className={s.doc_wrapper}>
        <div className={s.doc_content}>
            <div className={s.doc_heading}>
                Добро пожаловать в документацию TargetAds
            </div>
            <div className={s.doc_block}>
                <h2>
                    О проекте
                </h2>
                <div className={s.doc_block_content}>
                    <p>
                        TargetAds - это user based аналитический сервис, который помогает справедливо оценивать эффективность мобильной, video и display рекламы.
                    </p>
                    <p>
                        Ядром сервиса является механизм идентификации пользователя, моделирования атрибуции и трекинг медийной рекламы.  
                    </p>
                </div>
            </div>
            <div className={s.endOfContent}></div>
        </div>
    </div>
}

export default Intro;

