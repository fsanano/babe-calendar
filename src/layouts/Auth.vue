<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
        >
          Logo
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'Auth',

  data() {
    return {
      leftDrawer: true,
    };
  },
};
</script>
