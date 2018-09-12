class Item {
  constructor(name, num, price) {
    this.name = name
    this.num = Number(num)
    this.price = Number(price)
  }

  toString() {
    return `${this.num} x ${this.name} @${this.price} = Rp${this.price * this.num}`
  }
}

class Cashier {
  constructor() {
    this.items = []
  }

  insert(itemArr) {
    let name = itemArr[0]
    let num = itemArr[1]
    let price = itemArr[2]

    this.items.push(new Item(name, num, price))
  }

  countTotal() {
    let total = 0
    this.items.forEach(d => {
      total += d.num * d.price
    })

    return total
  }

  run(itemArr) {
    this.insert(itemArr)
    console.log("==========")
    console.log("Items: ")
    this.items.forEach(d => console.log(d.toString()))
    console.log(`Total: Rp${this.countTotal()}`)
    console.log("==========")
  }
}

let cashier = new Cashier()
console.log("Masukkan item: ")
console.log("Format: [nama] [jumlah] [harga satuan]")

var stdin = process.openStdin()

stdin.addListener("data", function(d) {
  let inputArr = d.toString().split(" ");
  cashier.run(inputArr)
})
