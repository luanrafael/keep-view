<template>
  <v-app>
    <v-content>
      <Notes/>
    </v-content>
  </v-app>
</template>

<script>
import Notes from './components/Notes';

export default {
  name: 'App',

  components: {
    Notes,
  },

  data: () => ({
    //
  }),
};
</script>
