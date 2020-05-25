let app = new Vue({
  el: "#app",
  data: {
    message: "test",
    lists: [{ ctn: "A" }, { ctn: "B" }, { ctn: "C" }]
  }
});

let imgApp = new Vue({
  el: "#imgApp",
  data: {
    imgArr: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLagi1g14f8NysqtRj4O1ON4QIya8Wt6qJ2Maba-l3DVAwkldU&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9cwriICkIbojek5tBb0Ymj8PVAxczv4RUrsWjghkk72tCpEBI&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkE3o0l1URBvKxaCsWu_Ozlp5Hv42dZm-aiSfqR04RqnBIxxqg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqUe1Y1yXPP2HdEyyUTWMaTM4pDwJOwq19ZIc-f0bh9bacGur5&usqp=CAU"
    ],
    index: 0
  },
  methods: {
    prev: function () {
      this.index--;
    },
    next: function () {
      this.index++;
    }
  }
});

let todoApp = new Vue({
  el: "#todoApp",
  data: {
    lists: ["食べる", "飲む", "遊び", "寝る"],
    inputValue: ""
  },
  methods: {
    add: function () {
      this.lists.push(this.inputValue);
    },
    del: function (index) {
      this.lists.splice(index, 1);
    },
    clear: function () {
      this.lists = [];
    }
  }
});

document.querySelector(".get").onclick = function () {
  axios.get("https://autumnfish.cn/api/joke/list?num=6").then(
    function (response) {
      console.log(response);
    },
    function (err) {
      console.log(err);
    }
  );
};

document.querySelector(".post").onclick = function () {
  axios
    .post("https://autumnfish.cn/api/user/reg", { username: "ピカドン" })
    .then(function (response) {
      console.log(response);
    });
};

let axiosApp = new Vue({
  el: "#axiosApp",
  data: {
    joke: "testttttt"
  },
  methods: {
    getJoke: function () {
      var that=this;
      axios.get("https://autumnfish.cn/api/joke").then(
        function (response) {
          //console.log(response.data);
          that.joke=response.data;
        },
        function (err) {
          console.log(err);
        }
      );
    }
  }
});



let weatherApp=new Vue({
  el:'#weatherApp',
  data:{
    city:'',
    weatherList:[]
  },
  methods:{
    searchWeather:function(){
      var that =this;
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
      .then(function(response){
        //console.log(response.data.data.forecast);
        that.weatherList=response.data.data.forecast;
        console.log(that.weatherList);
      })
      .catch(function(err){})
    },
    changeCity:function(city){
      this.city=city;
      this.searchWeather();
    }
  }
});
