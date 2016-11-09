<template>
    <div class="footer">
        <ul>
            <li><router-link to="/privacy">Datenschutz</router-link></li>
            <li><router-link to="/bye">Goodbye</router-link></li>
            <li><router-link to="/">Home</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'NaviFooter',
  data () {
    return {}
  }
}
</script>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        margin: 0 auto;
        text-align: center;
        width: 100%;
        background: lightgray;
    }
</style>