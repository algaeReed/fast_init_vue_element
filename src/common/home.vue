<template>
    <div>test_api_page
        <h1>{{hitokoto}}</h1>
    </div>
</template>

<script>

import {
   testApi
} from './api/demo-api.js';
export default {
    data() {
          return {
              hitokoto:""
          }
    },
    created() {
    },
    mounted() {
        this.request()
    },
    methods:{
        request(){
            testApi({ id:"b" }).then(response => {
            console.log(response); 
            this.hitokoto = response.hitokoto       
            });

        }

    }
    
}
</script>