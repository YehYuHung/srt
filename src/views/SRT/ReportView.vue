<template>
  <div class="template-container">
    <h1>{{ msg }}</h1>
    <!-- 6. Rerender View -->
    <div class="form-container">
      <form>
        <h3>表單測試</h3>
        <div class="div_text">
          <label for="username">帳號</label>
          <input type="text" v-model="username" />
        </div>
        <div class="div_text">
          <label for="username">密碼</label>
          <input type="text" v-model="password" />
        </div>
        <button v-on:click="handleOut">送出</button>
      </form>
    </div>
    <button v-on:click="clickButton">Outside Button</button>
    <!-- 1. Click Button -->
  </div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.form-container {
  border: 5px solid black;
  border-radius: 1rem;
  margin: 2% 10%;
  padding: 0px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "ReportView",
  props: {
    msg: String,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleOut() {
      alert(`輸入帳號 : ${this.username}\n輸入密碼 : ${this.password}`);
    },
    clickButton() {
      axios({
        url: "https://srtserver-production.up.railway.app/excel",
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileNameList =
            response.headers["content-disposition"].split("filename=");
          var fileName =
            fileNameList.length > 1
              ? decodeURIComponent(fileNameList[1])
              : new Date().toLocaleString().split(" ")[0] + "_test.xlsx";
          // create file link in browser's memory
          const href = URL.createObjectURL(response.data);

          // create "a" HTML element with href to file & click
          const link = document.createElement("a");
          link.href = href;
          link.setAttribute("download", fileName); //or any other extension
          document.body.appendChild(link);
          link.click();

          // clean up "a" element & remove ObjectURL
          document.body.removeChild(link);
          URL.revokeObjectURL(href);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>