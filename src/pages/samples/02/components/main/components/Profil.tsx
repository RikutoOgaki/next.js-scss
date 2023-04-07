import style from './profil.module.scss'

export function Profill() {
    return (
        <>
            <div className={style.profillwrap}>
                <div className={style.textbox}>
                    <span>-About-</span>
                    <span>おおがき りくと</span>
                    <h2>大垣陸斗</h2>
                    <p>ECCコンピューター専門学校Webデザインコース</p>
                    <p>25年卒</p>
                    <span className={style.line}></span>
                    <p>
                        ようこそ！私のポートフォリオへ！<br />
                        現在私はECCコンピューター専門学校でWebについて勉強しており、<br />
                        特にフロントエンドの技術に興味があり、日々そこに力を入れて勉強しています。<br />
                        またバックエンドの方にも少し興味がありPostgreSQLを少し勉強した経験があります。<br />
                        Webデザインコースにいるからこそデザインにも力を入れたいと考えており時間の合間を縫って日々勉強しています。<br />
                        これらの経験を生かしてゆくゆくはデザインエンジニアをして活躍したいです。
                    </p>
                </div>
            </div>
        </>
    )
}