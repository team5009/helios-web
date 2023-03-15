import { useCallback } from "react"
import Particles from "react-particles"
import type { Container, Engine } from "tsparticles-engine"
import {loadFull} from 'tsparticles'

export default () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)

        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container)
    }, [])

    return (
        <div>
            <Particles
                id="tsparticles"
                url="/data/nasa.json"
                init={particlesInit}
                loaded={particlesLoaded}
            />
        </div>
    )
}