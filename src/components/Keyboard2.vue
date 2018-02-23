<template>
    <div>
        <h1>Keyboard 2</h1>
        <button @click="$router.push({name: 'Keyboard1'})">Voir Keyboard 1</button>
        <p><a href="https://github.com/MartyWallace/vue-keyboard">Github repo</a></p>

        <div>
            <input type="text" placeholder="Text input" v-model="input" />
            <keyboard
                    v-model="input"
                    @custom="custom"
                    @input="changed"
                    :layouts="[
                        '1234567890{delete:backspace}|qwértyuiop|asdfghjkl|{shift:goto:1}zxcvbnm|{space:space}{custom:custom}',
                        '!@#$%^&*(){delete:backspace}|QWERTYUIOP|ASDFGHJKL|{shift:goto:0}ZXCVBNM|{space:space}{custom:custom}'
                    ]"
                    :maxlength="16"
            ></keyboard>
        </div>
    </div>
</template>

<script>
    import keyboard from 'vue-keyboard'
    export default {
        name: 'Keyboard2',
        components: {keyboard},
        data() {
            return {
                input: ''
            }
        },
        methods: {
            changed(value) {
                console.log('Value ' + value);
            },

            custom(keyboard) {
                console.log(keyboard.value);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
