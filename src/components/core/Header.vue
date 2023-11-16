<template>
  <div>
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar color="#1c2835" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ລະບົບຄົ້ນຫາຂໍ້ມູນປະຊາກອນ</v-toolbar-title>
      <v-spacer></v-spacer>

      <div>
        <!-- <v-avatar>
        <v-img src="../../assets/user.png" alt="John"></v-img>
      </v-avatar> -->

        <v-btn class="ma-2" color="#1c2835" height="50px">
          <v-avatar>
            <v-img src="../../assets/user.png" alt="John"></v-img>
          </v-avatar>

          <span style="margin-left: 8px">BCEL1997</span>
        </v-btn>

        <!-- <v-btn icon @click="onClickLogOff"> <v-icon>mdi-export</v-icon> </v-btn> -->
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style></style>
