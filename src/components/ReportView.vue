<template>
	<div>
        <p>{{ msg }}</p>  <!-- 6. Rerender View -->
        <!--<button v-on:click="getRemoteMessage">Inside Button</button>   1. Click Button -->
        <button v-on:click="clickButton">Outside Button</button>   <!-- 1. Click Button -->
    </div>
</template>

<script>
    import axios from 'axios';

export default {
  name: "ReportView",
  props: {
    msg: String
  },
  methods:{
    clickButton : function(){
        axios(
                {
                    url: 'https://srtserver-production.up.railway.app/excel',
                    method: 'GET',
                    responseType: 'blob',
                })
                        .then((response) => {

    var fileNameList = response.headers['content-disposition'].split("filename=");
    var fileName = fileNameList.length > 1? decodeURIComponent(fileNameList[1]): new Date().toLocaleString().split(' ')[0] + '_test.xlsx'
    // create file link in browser's memory
    const href = URL.createObjectURL(response.data);

    // create "a" HTML element with href to file & click
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', fileName); //or any other extension
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>

