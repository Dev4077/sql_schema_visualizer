import { TableConfig } from "../../../Visualizer/types";

import childTable from "./tables/child.json";
import nestedchildTable from "./tables/nested-child.json";
import Parant from "./tables/Parant.json";

const tables: TableConfig[] = [
  childTable,
  Parant,
  nestedchildTable
];

export default tables;
