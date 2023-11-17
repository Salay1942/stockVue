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
        <div class="container">
          <img src="@/assets/3740812.jpg" alt="" width="100%" />
          <div class="overlay">Mr Bounlerth SAIXONGDETH</div>
        </div>
      </router-link>

      <v-list nav dense>
        <div v-for="(link, i) in links" :key="i">
          <v-list-item v-if="!link.subLinks" :to="link.to" class="v-list-item">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title
              style="margin-left: 6px; font-size: 15px; font-weight: 200"
              >{{ link.text }}</v-list-item-title
            >
          </v-list-item>

          <v-list-group
            v-else
            :key="link.text"
            no-action
            :prepend-icon="link.icon"
            :value="false"
          >
            <template v-slot:activator>
              <v-list-item-title
                style="margin-left: 6px; font-weight: 100; font-size: 15px"
                >{{ link.text }}</v-list-item-title
              >
            </template>

            <v-list-item
              v-for="sublink in link.subLinks"
              :to="sublink.to"
              :key="sublink.text"
            >
              <v-list-item-icon>
                <v-icon>{{ sublink.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                style="margin-left: 6px; font-size: 15px; padding: 8px"
                >{{ sublink.text }}</v-list-item-title
              >
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>

      <!-- <v-list shaped>
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
      </v-list> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: [],
  mounted() {
    // this.selectedMenu = this.menus.findIndex(
    //   (menu) => menu[2] == this.$route.path
    // );
  },
  data() {
    return {
      selectedMenu: 0,
      // menus: [
      //   ["mdi-home-outline", "ໜັາຫລັກ", "/home"],
      //   ["mdi-file-chart-outline", "ລາຍງານ", "/report"],
      //   ["mdi-apps-box", "ກ່ຽວກັບຜູ້ພັດທະນາ", "/about"],
      //   ["mdi-account-cog-outline", "ຕັ້ງຄ່າລະບົບ", "/stockCreate"],
      //   ["mdi-account-cog-outline", "ຕັ້ງຄ່າລະບົບ", "/stockCreate"],
      //   [
      //     "mdi-application",
      //     "Applications",
      //     [
      //       {
      //         text: "View Applications",
      //         to: "/apps",
      //         icon: "mdi-view-list",
      //       },
      //       {
      //         text: "New Application",
      //         to: "/apps",
      //         icon: "mdi-plus",
      //       },
      //     ],
      //   ],
      // ],

      links: [
        {
          to: "/dass",
          icon: "mdi-home-outline",
          text: "ໜັາຫລັກ",
        },
        {
          icon: "mdi-shopping-outline",
          text: "ສິນຄ້າ",
          subLinks: [
            {
              text: "ເພີ່ມຂໍ້ມູນສິນຄ້າ",
              to: "/stockCreate",
            },
            {
              text: "ເເກ້ໄຂຂໍ້ມູນສິນຄ້າ",
              subLinks: [
                {
                  text: "111",
                  to: "/111",
                },
                {
                  text: "222",
                  to: "/222",
                },
              ],
            },
          ],
        },
        {
          icon: "mdi-file-chart-outline",
          text: "ລາຍງານ",
          subLinks: [
            {
              text: "ລາຍງານປະຈໍາວັນ",
              to: "/1",
            },
            {
              text: "ລາຍງານປະຈໍາເດືອນ",
              to: "/2",
            },
            {
              text: "ລາຍງານປະຈໍາປີ",
              to: "/3",
            },
          ],
        },
        {
          icon: "mdi-application",
          text: "ກ່ຽວກັບຜູ້ພັດທະນາ",
          subLinks: [
            {
              text: "View Applications",
              to: "/apps",
              icon: "mdi-view-list",
            },
            {
              text: "New Application",
              to: "/apps",
              icon: "mdi-plus",
            },
          ],
        },

        {
          to: "/report",
          icon: "mdi-account-cog-outline",
          text: "ຕັ້ງຄ່າລະບົບ",
        },
      ],
    };
  },
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch((err) => {
        console.log(err);
      });
    },

    span() {
      return `<v-list nav dense>
        <div v-for="(link, i) in links" :key="i">
          <v-list-item
            v-if="!link.subLinks"
            :to="link.to"
            :active-class="color"
            avatar
            class="v-list-item"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title
              style="margin-left: 6px; font-size: 15px; font-weight: 200"
              >{{ link.text }}</v-list-item-title
            >
          </v-list-item>

          <v-list-group
            v-else
            :key="link.text"
            no-action
            :prepend-icon="link.icon"
            :value="false"
          >
            <template v-slot:activator>
              <v-list-item-title
                style="margin-left: 6px; font-weight: 100; font-size: 15px"
                >{{ link.text }}</v-list-item-title
              >
            </template>

            <v-list-item
              v-for="sublink in link.subLinks"
              :to="sublink.to"
              :key="sublink.text"
            >
              <v-list-item-icon>
                <v-icon>{{ sublink.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                style="margin-left: 6px; font-size: 15px; padding: 8px"
                >{{ sublink.text }}</v-list-item-title
              >
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>`;
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
