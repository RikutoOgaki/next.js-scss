import style from './bijual.module.scss'

export function Bijual() {
    return (
        <>
            <div className={style.maincontents}>
                <div className={style.box}>
                    <div className={style.textbox}>
                        <h1>Coffe</h1>
                        <p>ちょっとしたスキマ時間によいひとときを。</p>
                    </div>
                    <div className={style.colorbox}></div>
                </div>
            </div>
        </>
    )
}