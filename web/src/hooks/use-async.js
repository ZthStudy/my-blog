/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-04-16 10:15:43
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-04-16 11:04:45
 */

import { ref, onMounted } from "@vue/composition-api";
const useAsync = (func) => {
  const loading = ref(false);

  onMounted(async () => {
    try {
      loading.value = true;
      await func();
    } catch (err) {
      throw err;
    } finally {
      loading.value = false;
    }
  });

  return loading;
};

export { useAsync };
