<template>
	<view class="content">
		<view class="header">
			<image class="logo" src="../../static/logo.png"></image>
		</view>
		<view class="gameView">
			<view @tap="go2(game.url)" v-for="(game,i) in gamesList" :key="'game-'+i">
				<image :src="game.image || '../../static/logo.png'" mode="widthFix"></image>{{game.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gamesList:[
					{
						image:'../../static/idiom.png',
						url:'../guessingidioms/guessingidioms',
						name:'看图猜成语'
					},
					{
						image: '../../static/chess.png',
						url:'../gobang/gobang',
						name:'双人五子棋'
					},
					{
						image: '../../static/mine.png',
						url:'../mine/mine',
						name:'扫雷'
					},
					{
						image:'../../static/puzzle.png',
						url:'../puzzle/puzzle',
						name:'九宫格拼图'
					},
					{
						image:'../../static/mouse.png',
						url:'../whac-A-Mole/whac-A-Mole',
						name:'打地鼠'
					},
					{
						image:'../../static/numcut.png',
						url:'../NumberCut/NumberCut',
						name:'拆数专家'
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			go2(page){
				uni.navigateTo({
					url:page
				})
			},
		}
	}
</script>

<style>
	
	page {
		background: #FFFFF3;
		/* background: linear-gradient(61deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%); */
	}
	
	.logo {
		height: 130rpx;
		width: 130rpx;
		/* border: #4CD964 solid; */
	}
	
	.header {
		display: flex;
		justify-content: center;
		margin: 50rpx;
		/* border: #555555 solid; */
	}
	
	.gameView{
		width: 90%;
		padding: 5%;
		display: flex;
		flex-direction:row;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.gameView view{
		box-shadow: 0 2px 5px #333333;
		width: 160upx;
		padding: 2% 1.5%;
		border-radius: 10px;
		background-color: #FFFFFF;
		overflow: hidden;
		margin: 2% 10px;
		text-align: center;
		font-size: 32upx;
		color: #566270;
	}
	
	.gameView view:active{
		background-color: #d0d3d0;
	}
	
	.gameView view image{
		width: 100%;
	}
</style>
