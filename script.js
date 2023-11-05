"use strict";

PetiteVue.createApp({
  name: "名前",
  total: 0,
  ope: "＋",
  ship: 0,
  style: { color: "lightgreen" },
  //グッズリスト
  list: [
    { id: 1, goods: "缶バッジ", unit: 500, qty: 0 },
    { id: 2, goods: "アクリルキーホルダー", unit: 800, qty: 0 },
    { id: 3, goods: "アクリルスタンド", unit: 1200, qty: 0 },
    { id: 4, goods: "フィギュア", unit: 12000, qty: 0 },
    { id: 5, goods: "ぬいぐるみ", unit: 3000, qty: 0 },
    { id: 6, goods: "トレーディングカード", unit: 500, qty: 0 },
    { id: 7, goods: "ブロマイド", unit: 600, qty: 0 },
    { id: 8, goods: "うちわ", unit: 1400, qty: 0 },
    { id: 9, goods: "ペンライト", unit: 3800, qty: 0 },
    { id: 10, goods: "リングライト", unit: 1100, qty: 0 },
    { id: 11, goods: "ステッカー", unit: 800, qty: 0 },
    { id: 12, goods: "アクリルバングル", unit: 700, qty: 0 },
    { id: 13, goods: "シリコンバンド", unit: 600, qty: 0 },
    { id: 14, goods: "タペストリー", unit: 3000, qty: 0 },
    { id: 15, goods: "マフラータオル", unit: 3200, qty: 0 },
    { id: 16, goods: "バスタオル", unit: 5000, qty: 0 },
    { id: 17, goods: "ハンカチ", unit: 1200, qty: 0 },
    { id: 18, goods: "ブランケット", unit: 8000, qty: 0 },
    { id: 19, goods: "コップ", unit: 1300, qty: 0 },
    { id: 20, goods: "タンブラー", unit: 4000, qty: 0 },
    { id: 21, goods: "コースター", unit: 500, qty: 0 },
    { id: 22, goods: "スマホカバー", unit: 2000, qty: 0 },
    { id: 23, goods: "スマホリング", unit: 1400, qty: 0 },
    { id: 24, goods: "ケーブルカバー", unit: 1100, qty: 0 },
    { id: 25, goods: "ヘアクリップ", unit: 1200, qty: 0 },
    { id: 26, goods: "ミラー", unit: 1400, qty: 0 },
    { id: 27, goods: "シュシュ", unit: 600, qty: 0 },
    { id: 28, goods: "カチューシャ", unit: 2200, qty: 0 },
    { id: 29, goods: "イヤリング", unit: 1800, qty: 0 },
    { id: 30, goods: "カレンダー", unit: 1800, qty: 0 },
    { id: 31, goods: "クリアファイル", unit: 800, qty: 0 },
    { id: 32, goods: "マスキングテープ", unit: 800, qty: 0 },
    { id: 33, goods: "ペンケース", unit: 3200, qty: 0 },
    { id: 34, goods: "下敷き", unit: 1200, qty: 0 },
    { id: 35, goods: "レターセット", unit: 1500, qty: 0 },
    { id: 36, goods: "ノート", unit: 1300, qty: 0 },
    { id: 37, goods: "ふせん", unit: 500, qty: 0 },
    { id: 38, goods: "Tシャツ", unit: 4800, qty: 0 },
    { id: 39, goods: "ロングTシャツ", unit: 5400, qty: 0 },
    { id: 40, goods: "パーカー", unit: 6600, qty: 0 },
    { id: 41, goods: "ポーチ", unit: 2800, qty: 0 },
    { id: 42, goods: "トートバッグ", unit: 3200, qty: 0 },
    { id: 43, goods: "エコバッグ", unit: 3200, qty: 0 },
    { id: 44, goods: "サコッシュ", unit: 2700, qty: 0 },
    { id: 45, goods: "キャップ", unit: 2800, qty: 0 },
    { id: 46, goods: "クッション", unit: 4300, qty: 0 },
  ],

  //名前の設定
  setName() {
    let a = window.prompt("名前を設定");
    this.name = a;
  },
  //送料を設定
  shipping() {
    let ship = window.prompt("送料を設定");
    if (isNaN(ship) || ship == "") {
      window.alert("数値を入力してください");
      this.total;
    } else {
      this.total += Number(ship);
      this.ship = Number(ship);
    }
  },
  //単価の設定
  setUnit(idx) {
    let u = window.prompt("単価を設定");
    if (isNaN(u) || u == "") {
      window.alert("数値を入力してください");
      this.list[idx].unit;
    } else {
      this.list[idx].unit = Number(u);
    }
  },
  //アイテムをクリック
  add(n, i) {
    if (this.list[i].qty == 0) {
      if (this.ope == "＋") {
        this.total += n;
        this.list[i].qty += 1;
        const ul = document.querySelectorAll("ul")[0];
        const li = document.createElement("li");
        li.setAttribute("id", this.list[i].id);
        li.classList.add("want-item");
        // グッズ名
        const h3 = document.createElement("h3");
        h3.textContent = this.list[i].goods;
        li.appendChild(h3);
        ul.appendChild(li);
        //<div class="qty-btn">
        const subTotal = document.createElement("div");
        subTotal.classList.add("subtotal");
        li.appendChild(subTotal);
        // 個数
        const qty = document.createElement("p");
        qty.classList.add("qty");
        qty.textContent = "×" + this.list[i].qty;
        subTotal.appendChild(qty);
        //個数×単価
        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = "￥" + this.list[i].unit * this.list[i].qty;
        subTotal.appendChild(price);
      }
    } else if (this.list[i].qty > 0) {
      if (this.ope == "＋") {
        this.total += n;
        this.list[i].qty += 1;
        const subTotal = document.getElementById(i + 1);
        const qty = subTotal.querySelector(".qty");
        const price = subTotal.querySelector(".price");
        qty.textContent = "×" + this.list[i].qty;
        price.textContent = "￥" + this.list[i].unit * this.list[i].qty;
      } else if (this.ope == "－") {
        this.total -= n;
        this.list[i].qty -= 1;
        const subTotal = document.getElementById(i + 1);
        const qty = subTotal.querySelector(".qty");
        const price = subTotal.querySelector(".price");
        qty.textContent = "×" + this.list[i].qty;
        price.textContent = "￥" + this.list[i].unit * this.list[i].qty;
        if (this.list[i].qty == 0) {
          subTotal.remove();
        }
      }
    }
    //合計の色
    if (this.total >= 12000) {
      this.style.color = "red";
    } else if (this.total >= 8000) {
      this.style.color = "orange";
    } else if (this.total >= 5000) {
      this.style.color = "gold";
    } else if (this.total >= 0) {
      this.style.color = "lightgreen";
    }
  },
}).mount();
