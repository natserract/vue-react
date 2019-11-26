
import { createComponent } from '@vue/composition-api'

export default createComponent({
    setup(props) {
        return () => (
            <div className="single-component">
                <span>{props.value}</span>
                <button onClick={props.handleClick}>
                    Increment This
                </button>
            </div>
        )
    },
    props: {
        value: Number,
        handleClick: Function as () => void
    }
})