
import style from './skill.module.scss'
import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiVite,
    SiNpm,
    SiChakraui,

    SiNextdotjs,
    SiVuedotjs,
    SiAngular,
    SiPostgresql,
    SiPhp,
    SiRuby,


    SiVisualstudiocode,
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeindesign,
    SiAdobexd,
    SiNotion,
    SiSlack
} from 'react-icons/si'

export function Skill() {

    const iconArray = {
        useicon: [
            SiHtml5,
            SiCss3,
            SiSass,
            SiJavascript,
            SiTypescript,
            SiReact,
            SiVite,
            SiNpm,
            SiChakraui,
        ],
        studyicon: [
            SiNextdotjs,
            SiVuedotjs,
            SiAngular,
            SiPostgresql,
            SiPhp,
            SiRuby,
        ],
        usingicon: [
            SiVisualstudiocode,
            SiFigma,
            SiAdobeillustrator,
            SiAdobephotoshop,
            SiAdobepremierepro,
            SiAdobeindesign,
            SiAdobexd,
            SiNotion,
            SiSlack
        ]
    }

    return (
        <>
            <section>
                <div className={style.skillwrap}>
                    <span>-Skill-</span>
                    <h2>What I use & am learning</h2>
                    <div>
                        <h3>Main technology used</h3>
                        <div>
                            {iconArray.useicon.map((item, idx) =>
                                <div key={idx}>

                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3>Technology you are learning (want to learn)</h3>
                    </div>
                    <div>
                        <h3>Tools used</h3>
                    </div>
                </div>
            </section>
        </>
    )
}