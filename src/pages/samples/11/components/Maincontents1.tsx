import style from './maincontents1.module.scss'

export function Maincontents1() {
    return (
        <>
            <section className={style.sec}>
                <div className={style.secbox}>
                    <div className={style.imgbox}>
                        <figure>
                            <img src="/img/02.png" alt="" />
                        </figure>
                    </div>
                    <div className={style.textbox}>
                        <h2>強者のみが今ここに集う。</h2>
                        <p>
                            みんな大好きSOUND VOLTEXで世界を勝ち取れ!<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}