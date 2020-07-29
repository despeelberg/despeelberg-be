<template>
    <div class="card" v-bind:class="[type, {click: clickable}]">
        <template v-if="clickable">
            <template v-if="intern">
                <router-link v-bind:to="href">
                    <h2>{{title}}</h2>
                    <p><slot></slot></p>
                </router-link>
            </template>
            <template v-else>
                <a :href="href" target="_blank">
                    <h2>{{title}}</h2>
                    <p><slot></slot></p>
                </a>
            </template>
        </template>
        <template v-else>
            <h2>{{title}}</h2>
            <p><slot></slot></p>
        </template>
    </div>
</template>

<script>
export default {
    name: "card",
    props: {
        title: String,
        content: String,
        clickable: Boolean,
        type: String,
        href: String,
        intern: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.card {
    padding: 15px;
    background: rgba(239,239,239,0.7);
    margin: 10px 10px 10px 0;
    transition: 0.1s linear;
    width: 100%;
}
.card.click:hover {
    transform: scale(1.01);
    position: relative;
    z-index: 9;
}
.card.info.click:hover h2 {
    color: #1a6ac1;
}
.card.warning.click:hover h2 {
    color: #fc1303;
}
.card.alert.click:hover h2 {
    color: rgba(255, 100, 3, 0.8);
}
h2 {
    font-family: 'Sigmar One', Avenir, Arial, Helvetica, sans-serif;
    color: #333333;
    font-size: 1.8rem;
    text-decoration: none;
    border-bottom: 1px solid #888888;
}
p {
    font-family: 'Roboto Condensed', Avenir, Arial, Helvetica, sans-serif;
    color: #333333;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 10px 0;
}
</style>