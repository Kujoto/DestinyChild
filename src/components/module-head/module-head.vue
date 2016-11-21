<template>

<header id="header">

{{title}}

</header>

</template>

<script>

module.exports = {
	components:{
		
	},
	data: function () {
		return {
      		msg: ''
    	}
  	},
  	ready(){
  	
  	},
  	methods:{
  	
  	},
	props:{
		"title":{
			type: String,
			default:"标题"
		}
	}
}
</script>


<style scoped>

#header{
color:#fff;
padding:15px 0;
background:url(img/blue.jpg) repeat;
text-align:center;
}

</style>
