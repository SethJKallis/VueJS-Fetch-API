<template>
    <div class="container">
        <h1 class="display-1">Admin</h1>
        <adminComponent/>
    </div>
</template>

<script>
import adminComponent from '@/components/Admin.vue';

export default{
    name: 'adminView',
    components:{
        adminComponent
    }
}
</script>