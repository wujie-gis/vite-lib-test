<!--
 * @Author: wuj
 * @Date: 2022-03-01 14:25:47
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-01 14:42:21
 * @Description: 
-->
<!--单行文本-->
<template>
  <el-input v-model="value"> </el-input>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// 按需索取的方式引入UI库（非必须）
import { ElInput } from "element-plus";

export default defineComponent({
  name: "BText",
  props: {
    "el-input": ElInput,
    modelValue: [String, Number],
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const value = ref();
    return { value };
  },
});
</script>
