<template>
    <footer class="footer">
        <p>Avec le soutien de</p>
        <img src="@/assets/logo-glpg.svg" alt="sponsor">
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-weight: 400;
    font-size: .85rem;
    color: black;
    margin: 30px 0;
}

img {
    height: 50px;
    margin-left: 10px;
}

p {
    margin-top: 14px;
    margin-bottom: 0;
}
</style>
