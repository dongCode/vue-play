import { defineComponent } from "vue";
import './index.css'

const AModal = defineComponent({
    name: "AModal",
    props: {
        title: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    emits: ['close'],
    setup(props, {emit,  slots}) {
        const closeModal = () => {
            emit('close')
        }
        return () => {

            return (
                <div class="modal" v-show={props.show}>
                    <div class="modal-overlay" onClick={closeModal}></div>
                    <div class="modal-container">
                        <div class="modal-header">
                            <h3>{props.title}</h3>
                            <button onClick={closeModal}>X</button>
                        </div>
                        <div class="modal-content">
                            {slots.default && slots.default()}
                        </div>
                        <div class="modal-footer">
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
})


export default AModal