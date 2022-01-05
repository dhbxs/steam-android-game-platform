<template>
	<view>
		<saolei style="width: 100%;" :width="mapsize[levelChoose][0]" 
		 :height="mapsize[levelChoose][1]"
		 :boomNum="boomNum[levelChoose]" @init="gameinit"></saolei>
		<view class="placeInRow" style="padding-top: 10px;">
			等级选择：
			<radio-group @change="changeLevel">
				<radio value="0" :checked="levelChoose == 0">初级</radio>
				<radio value="1" :checked="levelChoose == 1">中级</radio>
				<radio value="2" :checked="levelChoose == 2">高级</radio>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import saolei from '../../components/gwh-saolei/gwh-saolei.vue'
	export default {
		components:{
			saolei
		},
		data() {
			return {
				mapsize: [
					[8,8],[12,12],[16,30]
				],
				boomNum: [10,20,99],
				levelChoose: 0,
			}
		},
		onLoad() {
			
		},
		methods: {
			changeLevel(e){
				// console.log(e.detail.value)
				this.levelChoose = parseInt(e.detail.value)
			},
			gameinit(e){
				console.log(e)
			}
			
		}
	}
</script>

<style>
	
	.placeInRow{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
