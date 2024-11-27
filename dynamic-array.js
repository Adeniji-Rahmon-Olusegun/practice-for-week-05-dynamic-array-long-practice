class DynamicArray {

  constructor(defaultSize = 4) {

    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {

    if (this.length === this.capacity) {

      this.resize()
    }
    
    this.data[this.length] = val;

    this.length++;
  }


  pop() {

    if (this.length > 0) {

      let popped = this.data[this.length - 1];

      this.data[this.length - 1] = undefined;

      this.length--;

      return popped;
    }
  }

  shift() {

    if (this.length > 0) {
      
      let shifted = this.data[0];

      this.data[0] = undefined;

      for (let idx = 1; idx < this.length; idx++) {
        let num = this.data[idx];

        this.data[idx - 1] = num;
      }

      this.data[this.length - 1] = undefined;

      this.length--;

      return shifted;
    }
    
    return this.data[0];
  }

  unshift(val) {

    if (this.length === this.capacity) {
      this.resize();
    }

    if (this.length === 0) {
      this.data[0] = val;
    } else {
      for (let idx = this.length - 1; idx >= 0; idx--) {
        let num = this.data[idx];

        this.data[idx + 1] = num;
      }

      this.data[0] = val;
    }

    this.length++;
  }

  indexOf(val) {

    for (let idx = 0; idx < this.length; idx++) {
      let num = this.data[idx];

      if (num === val) return idx;
    }

    return -1;
  }

  resize() {

    if (this.length === this.capacity) {
      
      this.capacity = this.capacity * 2;
      
      let newData = new Array(this.capacity);

      for (let idx = 0; idx < this.length; idx++) {
        let num = this.data[idx];

        newData[idx] = num;
      }

      this.data = newData;
    }
  }

}

let arr = new DynamicArray();

arr.push(5);
arr.push(9);
arr.push(88);
arr.push(11);


// let p1 = arr.indexOf(5);
// let p2 = arr.indexOf(88);
// let p3 = arr.indexOf(6);
// // let p3 = arr.unshift();
// // let p4 = arr.unshift();


// console.log(p1);
// console.log(p2);
// console.log(p3);
// // console.log(p4);
// // console.log(arr.shift());

arr.resize();

console.log(arr.data);
console.log(arr.length);
console.log(arr.capacity)



module.exports = DynamicArray;