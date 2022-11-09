<template>
    <footer class="footer">
        <p>Avec le soutien institutionnel du laboratoire</p>
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
    width: 50%;
    margin-right: 10px;
    margin-bottom: 5px;
}

p {
    margin-bottom: 0;
    width: 50%;
    text-align: center;
    margin-left: 10px;
}
</style>
