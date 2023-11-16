<template>
  <div style="text-align: start">
    <v-navigation-drawer
      app
      permanent
      absolute
      dark
      src="@/assets/background_menu.jpg"
    >
      <router-link to="/" exact>
        <!-- <img src="@/assets/3740812.jpg" alt="" width="100%" /> -->

        <div class="container">
          <img src="@/assets/3740812.jpg" alt="" width="100%" />
          <div class="overlay">Mr Bounlerth SAIXONGDETH</div>
        </div>
      </router-link>

      <v-list shaped>
        <v-subheader>MENUS</v-subheader>
        <v-list-item-group v-model="selectedMenu" mandatory color="primary">
          <v-list-item
            class="tile"
            v-for="([icon, text, route], i) in menus"
            :key="i"
            link
            @click="onClickMenu(route)"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="margin-left: 6px; font-weight: 100">{{
                text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: [],
  mounted() {
    this.selectedMenu = this.menus.findIndex(
      (menu) => menu[2] == this.$route.path
    );
  },
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-home-outline", "ໜັາຫລັກ", "/home"],
        ["mdi-file-chart-outline", "ລາຍງານ", "/report"],
        ["mdi-apps-box", "ກ່ຽວກັບຜູ້ພັດທະນາ", "/about"],
        ["mdi-account-cog-outline", "ຕັ້ງຄ່າລະບົບ", "/stockCreate"],
      ],
    };
  },
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch((err) => {
        console.log(err);
      });
    },
  },
  watch: {
    //$route(to, from) {
    //  this.selectedMenu = this.menus.findIndex(menu=> menu[2] == to.path)
    // }
  },
  computed: {},
};
</script>

<style>
.v-list-item-group .v-list-item--active {
  color: #fff !important;
  font-weight: bold;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  opacity: 0.7;
}

.tile {
  color: #fff;
}
.tile:hover {
  background: gray;
}
.tile:active {
  background: grey;
}

* {
  box-sizing: border-box;
}

.container {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: gray;
  width: 100%;
  height: 30%;
  transition: 0.5s ease;
  opacity: 0;
  color: gainsboro;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  opacity: 1;
}

.container:hover .overlay {
  opacity: 1;
}
</style>
