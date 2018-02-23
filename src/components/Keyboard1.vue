<template>
    <div>
        <h1>Keyboard 1</h1>
        <button @click="$router.push({name: 'Keyboard2'})">Voir Keyboard 2</button>
        <p><a href="https://github.com/icebob/vue-touch-keyboard">Github Repo</a></p>
        <div>
            <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
            <vue-touch-keyboard v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" />
        </div>
    </div>
</template>

<script>
import VueTouchKeyboard from "vue-touch-keyboard";
import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css";

//Vue.use(VueTouchKeyboard);

export default {
    name: 'Keyboard1',
    components: {"vue-touch-keyboard": VueTouchKeyboard.component},
    data() {
        return {
            visible: false,
            layout: "normal",
            input: null,
            options: {
                useKbEvents: false
            }
        }
    },
    methods: {
        accept(text) {
            alert("Input text: " + text);
            this.hide();
        },

        show(e) {
            this.input = e.target;
            this.layout = e.target.dataset.layout;

            if (!this.visible)
                this.visible = true
        },

        hide() {
            this.visible = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
