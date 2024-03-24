import instance from "@/config/CustomAxios";
import { getLocalstorage } from "@/utils/LocalStorage";

const getProductAll = () => {
  return instance.get("/getProductAll");
};

const getProductById = () => {
  const id = getLocalstorage("idPr");
  return instance.get("/getProductId/" + id);
};

export { getProductAll, getProductById };
