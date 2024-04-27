import { reactive } from "vue";

export const dialogList = reactive([]);

export const addDialog = (options) => {
  dialogList.push({ ...options, visible: true });
};

export const closeDialog = (item, i, args, isNativeClose) => {
  dialogList.splice(i, 1);
  if (!isNativeClose) item.callBack && item.callBack(...args);
};
