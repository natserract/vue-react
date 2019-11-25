import { VNode } from 'vue'
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
        commentId: Array as () => string[]
    },
    setup(props) {
        return () => (
            <div className="components-props">
                <h2>{props.name}</h2>
                <p>{props.commentId}</p>
            </div>
        )
    }
})

/* Conditional Rendering */

const ConditionalRendering = createComponent({
    name: 'ConditionalRendering',
    props: {
        show: Boolean
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
    }
})

const MapComponent = createComponent({
    props: {
        render: {
            default: Object
        }
    },
    setup(props) {
        return () => (
            <ul>
                {props.render.map((item: number[]) =>
                    <li>{item}</li>
                )}
            </ul>
        )
    }
})


/* Wrap All Component Here */
const RootMainConcept = createComponent({
    render() {
        const arr: number[] = [1, 2, 3];

        return (
            <div>
                <mainComponentProps name="Your name here" commentId={['Name1', 'Name2']} />
                <conditionalRendering show={false} />
                <children>Children Component</children>
                <mapComponent render={arr} />
                <handlingEvent />
            </div>
        )
    },
    components: {
        mainComponentProps: ComponentProps,
        conditionalRendering: ConditionalRendering,
        children: Children,
        mapComponent: MapComponent,
        handlingEvent: HandlingEvent
    }
});

export default RootMainConcept