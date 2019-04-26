<template>
  <q-page padding class="flex flex-center nowrap">
    <div class="container">
      <div class="row flex-center q-mb-lg">
        <q-btn to="auth/signin">
          Sign in
        </q-btn>
        <span class="q-px-lg">or</span>
        <q-btn to="auth/signup">
          Sign up
        </q-btn>
      </div>
      <hr>
      <div class="row flex-center q-mt-md">
        <q-btn
          rounded
          dense
          flat
          color="primary"
          size="lg"
          icon="ion-logo-google"
          class="q-mx-sm"
        />
        <q-btn
          rounded
          dense
          flat
          color="primary"
          size="lg"
          icon="ion-logo-facebook"
          class="q-mx-sm"
        />
        <q-btn
          rounded
          dense
          flat
          color="primary"
          size="lg"
          icon="ion-logo-twitter"
          class="q-mx-sm"
        />
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
