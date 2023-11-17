import { container } from "../../template-helpers.js";
export default ({ item }) => {
  const { deprecated } = item.data;
  if (deprecated) {
    return container("warning", "Deprecated", deprecated);
  }
}