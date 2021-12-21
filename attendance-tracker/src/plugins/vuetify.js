import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont:'md',
    theme: {
        primary: '#9652ff',
        success: '#3cd1c2',
        error: '#ffaa2c'
    }
});