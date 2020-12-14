<template>
    <div>
        <span>Página User</span>

        <p>Id do Usuário: {{ $route.params.id }}</p>

        </div>
</template>

<script>
export default {
    data() {
        return {
         
        }
    }
} 
</script>
<style>
span {
    background-color: yellow;
    color: blueviolet;
}
</style>