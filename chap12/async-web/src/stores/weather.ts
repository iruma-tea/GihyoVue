import { defineStore } from "pinia";

export interface City {
    name: string;
    q: string;
}

interface State {
    cityList: Map<string, City>;
    selectedCity: City;
    isLoading: boolean;
    weatherDescription: string;
}

export const useWeatherStore = defineStore({
    id: "weather",
    state: (): State => {
        return {
            cityList: new Map<string, City>(),
            selectedCity: {
                name: "",
                q: "",
            },
            isLoading: true,
            weatherDescription: ""
        };
    },
    getters: {},
    actions: {
        prepareCityList() {
            this.cityList.set("Osaka", {
                name: "大阪",
                q: "Osaka"
            });
            this.cityList.set("Kobe", {
                name: "神戸",
                q: "Kobe"
            });
            this.cityList.set("Himeji", {
                name: "姫路",
                q: "Himeji"
            });
        },
        async recieveWeatherInfo(id: string) {
            this.selectedCity = this.cityList.get(id) as City;
            // アクセス先のURLの基本部分の変数を用意
            const weatherInfoUrl = "http://api.openweathermap.org/data/2.5/weather";
            // クエリパラメータの元のデータとなるオブジェクトリテラルを用意
            const params : {
                lang: string,
                q: string,
                appId: string,
            } = {
                // 言語設定のクエリパラメータ
                lang: "ja",
                // 都市を表すクエリパラメータ
                q: this.selectedCity.q,
                // APIキーのクエリパラメータ
                appId: "eae14fea056621839d8e6fb42c1e9e65"
            };
            // クエリパラメータを生成
            const queryParams = new URLSearchParams(params);
            // 実際にアクセスするURLを生成する
            const urlFull = `${weatherInfoUrl}?${queryParams}`;
            // URLに非同期でアクセスしてデータを取得
            const response = await fetch(urlFull);
            // 取得したデータを非同期でJSONに変換。
            const weatherInfoJSON = await response.json();
            // 天気情報JSONから天気データを取得し、ステートに格納
            const weatherArray = weatherInfoJSON.weather;
            const weather = weatherArray[0];
            this.weatherDescription = weather.description;
            // isLoadingステートをfalseに変更
            this.isLoading = false;
        }
    }
});