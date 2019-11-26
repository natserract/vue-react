
import { createComponent } from '@vue/composition-api'
import styled from 'vue-styled-components'

const ButtonComp = styled.a`
    cursor: default
`

export default createComponent({
    setup() {
        return () => (
            <div>
                Hello
                <ButtonComp>
                    Hello
                </ButtonComp>
            </div>
        )
    },
    components: {
        ButtonComp
    }
})
