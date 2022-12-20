<template>
    <div class="adminContainer">
        <h2 class="display-5">Admin Table</h2>
        <table class="table table-primary table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Game Title</th>
                    <th>Price</th>
                    <th>Del.</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" v-bind:key="product">
                    <td>{{ product.id }}</td>
                    <td>{{ product.gameTitle }}</td>
                    <td>R{{ product.price }}</td>
                    <td><button class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default{
    name: "adminComponent",
    computed: {
        ...mapGetters(["products"])
    },
    methods: {
        ...mapActions(["fetchProducts"]),
    },
    created(){
        this.fetchProducts();
    },
}
</script>

<style scoped>

</style>