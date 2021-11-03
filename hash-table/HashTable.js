//  collision using separate chaining

class HashTable {
  constructor(size = 29) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total = total * PRIME + key.charCodeAt(i);
    }
    return total % this.keyMap.length;
  }

  set(key, value) {
    let index = this._hash(key);
    let needPush = true;

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    } else {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value;
          needPush = false;
        }
      }
    }

    if (needPush) this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
      return undefined;
    }
  }

  remove(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index].splice(i, 1);
        }
      }
      return undefined;
    }
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let test = new HashTable();
test.set("first", "hello world");
test.set("lulu", "pig");
test.set("bla", "pig");
test.set("dragon", "boat");
test.set("dragon", "boatssss");

console.log(test.keys());
console.log(test.values());
console.log(test.get("lulu"));
console.log(test.remove("lulu"));
console.log(test.keyMap);
