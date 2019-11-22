import { createComponent } from "@vue/composition-api";

/* Chilren */
const Children = createComponent({
    name: 'Children',
    template: `
        <div>
            <slot></slot>
        </div>
    `
})


/* Components and Props */
const ComponentProps = createComponent({
    name: 'ComponentProps',
    props: {
        name: String,
        commentIds: Array
    },
    setup(props) {
        return () => (
            <div class="components-props">
                <h2>{props.name}</h2>
                <p>{props.commentIds}</p>
            </div>
        )
    },
})


/* Conditional Rendering */

const ConditionalRendering = createComponent({
    name: 'ConditionalRendering',
    props: {
        show: Boolean,
    },
    setup(props) {
        return () => props.show ? <p>True Condition</p> : <p>False Condition</p>
    }
})


/* Handling Events */
const HandlingEvent = createComponent({
    setup() {
        const handleButtonClick = () => {
            alert('Button is clicked');
        }
        return () => (
            <button onClick={handleButtonClick}>
                Click Event
            </button>
        )
    },
})

const MapComponent = createComponent({
    props: {
        render: {
            default: Object
        }
    },
    setup(props) {
        return () => (
            <div>
                {props.render.map((item: Object) => createComponent({
                    setup() {
                        return () => (
                            <div>
                                {item}
                            </div>
                        )
                    }
                })
                )}
            </div>
        )
    }
})

/* Wrap All Component Here */
let arr = [1, 2, 3]
const RootMainConcept = createComponent({
    render() {
        return (
            <div>
                <ComponentProps name="Your name here" commentIds={['1', '2', '3']} />
                <ConditionalRendering show={false} />
                <Children>Children Component</Children>
                <MapComponent render={arr} />
                <HandlingEvent />
            </div>
        )
    }
});

export default RootMainConcept