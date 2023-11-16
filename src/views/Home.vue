<template>
  <div style="padding: 4px">
    <el-card class="box-card" justify="center">
      <div slot="header" class="clearfix">
        <span>ຄົ້ນຫາຂໍ້ມູນລູກຄ້າ</span>
      </div>
      <div style="text-align: center">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="formInline.user"
              placeholder="ຊື່ ເເລະ ນາມສະກຸນ"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formInline.user" placeholder="ທີ່ຢູ່"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="ເເຂວງ">
              <el-option label="ນະຄອນຫລວງວຽງຈັນ" value="VTE"></el-option>
              <el-option label="ຈໍາປາສັກ" value="CPS"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">ຄົ້ນຫາ</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-empty :image-size="200"></el-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
