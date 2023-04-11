import style from './maincontents.module.scss'

interface propsStyle {
    img: string,
    title: string,
    text: string
}

const maincontents = (props: propsStyle) => {
    return (
        <article>
            <figure className={style.fig}>
                <img src={props.img} alt="" />
            </figure>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </article>
    )
}

export default maincontents