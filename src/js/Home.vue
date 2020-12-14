<template>
    <div>
        <span>Página Home: {{ t }}</span>

        <ul>
          <li><router-link to="user/1">Usuário 1</router-link></li>
          <li><router-link to="user/2">Usuário 2</router-link></li>

        </ul>

        </div>
</template>

<script>
export default {
    data() {
        return {
            t:'Cissa'
        }
    }
} 
</script>
<style>
span {
    background-color: yellow;
    color: grey;
}
</style>