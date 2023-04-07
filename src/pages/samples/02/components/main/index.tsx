import { Name } from './components/Name'
import { Profill } from './components/Profil'
import { Skill } from './components/Skill'

export function Main() {
    return (
        <>
            <main>
                <Name />
                <Profill />
                <Skill />
            </main>
        </>
    )
}