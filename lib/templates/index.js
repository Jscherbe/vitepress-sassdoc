import group from "./page/group.js";

import _meta from "./annotations/_meta.js";
import deprecated from "./annotations/deprecated.js";
import example from "./annotations/example.js";
import name from "./annotations/name.js";

export const page = {
  group
};

export const annotations = {
  deprecated,
  example,
  name,
  _meta,
};