import { defineComponent } from 'vue'

export  default  defineComponent({
    props:{
        label: String,
        value: String
    },
    setup(props){
        return () => (
                <div class="user-info">
                    <span class="label">{props.label}: </span>
                    <span class="value">{props.value}</span>
                </div>
        )
    }
})