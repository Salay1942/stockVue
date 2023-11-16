<template>
  <div style="padding: 4px">
    <el-card class="box-card" justify="center">
      <div slot="header" class="clearfix">
        <span>ເພີ່ມຂໍ້ມູນສິນຄ້າ</span>
      </div>
      <div style="text-align: center">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="ຊື່ສິນຄ້າ" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="ລາຄາ" prop="price">
            <el-input v-model="ruleForm.price" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="ຈໍານວນ" prop="age">
            <el-input v-model="ruleForm.age"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >ບັນທຶກ</el-button
            >
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card" justify="center" style="margin-top: 4px">
      <div slot="header" class="clearfix">
        <span>ລາຍລະອຽດສິນຄ້າ</span>
      </div>
      <div style="text-align: center">
        <el-empty :image-size="200"></el-empty>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("ກະລຸນາປ້ອນຊື່ສິນຄ້າ"));
      }
    };
    var checkPrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("ກະລຸນາປ້ອນລາຄາ"));
      }
    };
    var checkAmount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("ກະລຸນາປ້ອນຈໍານວນ"));
      }
    };
    return {
      ruleForm: {
        name: "",
        price: "",
        age: "",
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        price: [{ validator: checkPrice, trigger: "blur" }],
        age: [{ validator: checkAmount, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
