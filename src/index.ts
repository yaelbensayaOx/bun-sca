import { XMLParser } from "fast-xml-parser";
import axios from "axios";
import semver from "semver";

const parser = new XMLParser();
const result = parser.parse("<root><item>test</item></root>");
console.log(result);
