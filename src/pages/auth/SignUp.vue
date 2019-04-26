<template>
  <q-page padding>
    <div class="row w-100 flex-center">
      <div class="col-4">
        <div class="text-h3 text-center q-pb-lg">Sign in</div>
        <q-form class="text-center">
          <q-input
            type="email"
            label="E-mail"
          />
          <q-input
            type="password"
            label="Password"
            class="q-mb-lg"
          />
          <q-btn>Send </q-btn>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignIn',
};
</script>

<style>
</style>
