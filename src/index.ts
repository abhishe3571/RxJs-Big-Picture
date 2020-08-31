import "./index.css";

import "./chapter-01";

import { add } from "./common/math";

export class C {
  private x = 17;
  getX = () => this.x;
  setX = (newVal: number) => {
    this.x = newVal;
  };
}

export let x = new C();
export let y = { ...{ some: "value" } };

console.log(add(3, 4));
