<template>
  <div id="app">
    <input type="text" placeholder="请输入关键字" />
    <button>搜索</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped="scoped">

#app{
	margin-top: 0.15625rem;
}

	input{
		width: 80%;
		height: 1.03125rem;
		border: 0.015625rem solid #D4D4D4;
		border-radius: 0.125rem;
		padding: 0.15625rem;
		margin-left: 0.15625rem;
		color: #DCDCDC;
	}
	
	button{
		margin-left: 0.078125rem;
		width: 13%;
		height: 1.03125rem;
		background: #80CBFE;
		border: 0;
		outline: 0;
		border-radius: 0.125rem;
		color: white;
	}

</style>
