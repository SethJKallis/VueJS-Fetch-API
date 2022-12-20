<template>
    <div class="productsContainer container-fluid">
        <h2 class="display-5">List of Products:</h2>
        <table class="table table-primary table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Game Title</th>
                    <th>Price</th>
                    <th>BUY!</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" v-bind:key="product">
                    <td>{{ product.id }}</td>
                    <td>{{ product.gameTitle }}</td>
                    <td>R{{ product.price }}</td>
                    <td><button class="btn btn-primary" v-on:click="purchaseBtn(product)">Purchase</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default{
    name: "productsComponent",
    computed: {
        ...mapGetters(["products"])
    },
    methods: {
        ...mapActions(["fetchProducts"]),
        purchaseBtn(product){
            alert(`You've Purchased ${product.gameTitle} for R${product.price}!`)
        }
    },
    created(){
        this.fetchProducts();
    },
}

</script>

<style scoped>

</style>