<script setup lang="ts">
import { computed, ref } from "vue";

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, {id: 2345, name: "ホワイトレディ", price: 1200});
cocktailDataListInit.set(4412, {id: 4412, name: "ブルーハワイ", price: 1500});
cocktailDataListInit.set(6792, {id: 6792, name: "ニューヨーク", price: 1100});
cocktailDataListInit.set(8429, {id: 8429, name: "マティーニ", price: 1500});

const cocktailDataList = ref(cocktailDataListInit);

const cocktail1500 = computed(
  (): Map<number, Cocktail> => {
    const newList= new Map<number, Cocktail>();
    cocktailDataList.value.forEach(
      (value: Cocktail, key: number): void => {
        if (value.price == 1500) {
          newList.set(key, value);
        }
      }
    );
    return newList;
  }
);

const changeWhiteLadyPriceInList = (): void => {
  const whiteLady = cocktailDataList.value.get(2345) as Cocktail;
  whiteLady.price = 1500;
}

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

</script>

<template>
  <section>
    全てのカクテルリスト
    <ul>
      <li v-for="[id, cocktailItem] in cocktailDataList" v-bind:key="id">
        {{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円
      </li>
    </ul>
  </section>
  <section>
    値段が1500円のカクテルリスト
    <ul>
      <li v-for="[id, cocktailItem] in cocktail1500" v-bind:key="'cocktail1500' + id">
        {{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円
      </li>
    </ul>
  </section>
  <section>
    <p>
      CocktailDataList内のホワイトレディの価格を1500円に
      <button v-on:click="changeWhiteLadyPriceInList">変更</button>
    </p>
  </section>
</template>
