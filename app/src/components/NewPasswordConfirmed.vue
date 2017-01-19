<template>
    <div class="row">
      <div class="col-md-8">
      <h1>{{ $t("NewPasswordConfirmed.header") }}</h1>
      <p>{{ $t("NewPasswordConfirmed.paragraph") }}</p>
      <p><router-link to="/" type="button" class="btn btn-primary">{{ $t("NewPasswordConfirmed.button") }}</router-link></p>
    </div>
  </div>
</template>

<script>
	export default {
	  name: 'password-confirmed'
	}
</script>

<style lang="scss">

</style>
