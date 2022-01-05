<template>
	<view class="content">
		<view class="titleLine">
			<view @tap="initMap">
				<image src="./imgs/dead.png" v-if="isGameOver"></image>
				<image src="./imgs/smile.png" v-else-if="isGameSuccess"></image>
				<image src="./imgs/smile2.png" v-else></image>
			</view>
			<view>剩余：{{getRestBoomNum()}}</view>
		</view>
		<view class="contentMap">
			<view style="width: auto; height: auto; overflow: scroll;">
				<view class="placeInRow" v-for="(row,i) in mask" :key="'row-'+i">
					<view class="content" v-for="(block,j) in row" :key="'block-'+j">
						<view v-if="block === 1" class="block">
							<view v-if="maps[i][j] > 0" @tap="setMask(i,j,'open')">{{maps[i][j]}}</view>
							<view v-else-if="maps[i][j] === 0"></view>
							<view v-else>
								<image src="./imgs/boom.png"></image>
							</view>
						</view>
						<view v-else-if="block === 0" class="block mask" @tap="setMask(i,j,'open')"
							@longpress="setMask(i,j,'flag')">
						</view>
						<view v-else-if="block === -1" class="block mask" @longpress="setMask(i,j,'flag')">
							<image src="./imgs/flag.png"></image>
						</view>
						<view v-else-if="block === 2" class="block mask">
							<image src="./imgs/error.png"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * gwh 简单扫雷
	 * @description 扫雷游戏简单Demo
	 * @tutorial 
	 * @property {Number} width 扫雷地图宽
	 * @property {Number} height 扫雷地图高
	 * @property {Number} boomNum 雷个数     
	 * @property {Function} @init 地图初始化监听，返回游戏地图：-1表示雷，0-9表示周围有几个雷
	 * @property {Function} @result 游戏结束监听, code=0成功，其余失败
	 * */
	export default {
		props: {
			width: {
				type: Number,
				default: 8
			},
			height: {
				type: Number,
				default: 8
			},
			boomNum: {
				type: Number,
				default: 10
			}
		},
		watch: {
			width(newVal) {
				this.initMap()
			},
			height(newVal) {
				this.initMap()
			},
			boomNum(newVal) {
				this.initMap()
			}
		},
		data() {
			return {
				maps: [], //-1：自己是雷，0~8：周围雷的总数且自己不是雷，
				mask: [], //-1：方块未打开且有标记，0：方快未打开，1：方块打开状态，2：提示误标方块
				booms: [], //存储所有雷的位置信息
				isGameOver: false,
				isGameSuccess: false,
				lastAction: '',
			};
		},
		mounted() {
			this.initMap()
		},
		methods: {
			getRestBoomNum() {
				try {
					var flagNum = 0; //被标记方块的数量
					var shownNum = 0; //被打开方块的数量
					for (var i = 0; i < this.width; i++) {
						for (var j = 0; j < this.height; j++) {
							if (this.mask[i][j] == -1) flagNum++;
							if (this.mask[i][j] == 1) shownNum++;
						}
					}
					// console.log(shownNum, this.booms.length)
					this.$nextTick(function() {
						//成功的判定条件
						if (shownNum + this.booms.length == this.width * this.height && !this.isGameSuccess) {
							this.isGameSuccess = true;
							for (var i = 0; i < this.width; i++) {
								for (var j = 0; j < this.height; j++) {
									//成功后自动帮标记剩余雷
									if (this.mask[i][j] == 0 && this.maps[i][j] == -1) this.mask[i][j] = -1
								}
							}
							this.$forceUpdate() //强制页面刷新
						}
					})

					return this.booms.length - flagNum; //返回剩余雷数
				} catch (e) {
					return this.boomNum;
				}
			},
			initMap() {
				this.maps = []
				this.mask = []
				this.isGameOver = false
				this.isGameSuccess = false
				this.booms = []
				for (var i = 0; i < this.width; i++) { //行
					this.maps.push([])
					this.mask.push([])
					for (var j = 0; j < this.height; j++) { //列
						this.maps[i].push(0),
							this.mask[i].push(0)
					}
				}

				//随机埋雷
				var initBooms = []
				while (initBooms.length < this.boomNum) {
					var xy = [ //随机生成雷坐标
						parseInt(Math.random() * this.width),
						parseInt(Math.random() * this.height)
					]
					var hasSame = false; //用于判断是否有相同的雷
					for (var b = 0; b < initBooms.length; b++) { //随机新生成的雷是否与已有的雷位置冲突，是则重新生成
						if (initBooms[b][0] == xy[0] && initBooms[b][1] == xy[1]) {
							hasSame = true;
							break;
						}
					}
					if (!hasSame) {
						initBooms.push(xy)
						this.maps[xy[0]][xy[1]] = -1;
					}
				}
				this.booms = initBooms; //存一下刚生成的雷的位置信息

				//计算周围8个方向的雷的总数
				for (var i = 0; i < this.width; i++) {
					for (var j = 0; j < this.height; j++) {
						if (this.maps[i][j] !== -1) {
							var boomSum = 0;
							if (i > 0) {
								if (j > 0 && this.maps[i - 1][j - 1] == -1)
									boomSum++; //左上
								if (this.maps[i - 1][j] == -1)
									boomSum++; //左
								if (j < this.height - 1 && this.maps[i - 1][j + 1] == -1)
									boomSum++; //左下
							}
							if (i < this.width - 1) {
								if (j > 0 && this.maps[i + 1][j - 1] == -1)
									boomSum++; //右上
								if (this.maps[i + 1][j] == -1)
									boomSum++; //右
								if (j < this.height - 1 && this.maps[i + 1][j + 1] == -1)
									boomSum++; //右下
							}
							if (j > 0 && this.maps[i][j - 1] == -1)
								boomSum++; //上
							if (j < this.height - 1 && this.maps[i][j + 1] == -1)
								boomSum++; //下
							this.maps[i][j] = boomSum
						}
					}
				}

				this.$emit('init', {
					maps: this.maps
				}) //传maps数据给父组件
			},
			setMask(i, j, action) {
				// action 可以是 open 或 flag
				this.lastAction = action;
				if (this.isGameOver || this.isGameSuccess) {
					return;
				} else if (action === 'open') {
					if (this.maps[i][j] === -1) {
						//失败后让所有的雷显示出来
						for (var b = 0; b < this.booms.length; b++) {
							var theBoomXY = this.booms[b];
							if (this.mask[theBoomXY[0]][theBoomXY[1]] != -1) {
								this.mask[theBoomXY[0]][theBoomXY[1]] = 1
							}
						}
						this.isGameOver = true;

						//失败后显示所有的错误标记
						for (var i = 0; i < this.width; i++) {
							for (var j = 0; j < this.height; j++) {
								if (this.mask[i][j] == -1 && this.maps[i][j] != -1) this.mask[i][j] = 2;
							}
						}
						this.$forceUpdate() //强制页面刷新
					} else {
						this.canIOpen(i, j);
					}
				} else { //action === 'flag'
					if (this.mask[i][j] == 0)
						this.mask[i][j] = -1; //标记
					else if (this.mask[i][j] == -1)
						this.mask[i][j] = 0; //取消标记
					// console.log(i,j,this.mask[i][j])
					this.$nextTick(function() {
						this.$forceUpdate()
					})
				}
			},
			canIOpen(i, j) {
				
				this.mask[i][j] = 1; //打开此方块

				/*
					递归
					点到0
						1.显示自己
						2.找四周
							1.显示自己（如果四周不为0，则就显示到这里，不再查找了）
							2.如果值为0
								1.显示自己
								2.找四周（如果四周不为0，则就显示到这里，不再查找了）
									1.显示自己
									2.找四周（如果四周不为0，则就显示到这里，不再查找了）
										...
				*/
				if (this.maps[i][j] === 0) { //点到0的话
					if (i > 0) {
						if (j > 0 && this.mask[i - 1][j - 1] == 0) //左上未被打开的话
							this.canIOpen(i - 1, j - 1);
						if (this.mask[i - 1][j] == 0) //左 
							this.canIOpen(i - 1, j);
						if (j < this.height - 1 && this.mask[i - 1][j + 1] == 0) //左下 
							this.canIOpen(i - 1, j + 1);
					}
					if (i < this.width - 1) {
						if (j > 0 && this.mask[i + 1][j - 1] == 0) //右上
							this.canIOpen(i + 1, j - 1);
						if (this.mask[i + 1][j] == 0) //右 
							this.canIOpen(i + 1, j, );
						if (j < this.height - 1 && this.mask[i + 1][j + 1] == 0) //右下 
							this.canIOpen(i + 1, j + 1);
					}
					if (j > 0 && this.mask[i][j - 1] == 0) //上
						this.canIOpen(i, j - 1);
					if (j < this.height - 1 && this.mask[i][j + 1] == 0) //下
						this.canIOpen(i, j + 1);
				}

				// console.log(this.mask)
				this.$forceUpdate();
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.contentMap {
		width: 100%;
		overflow: hidden;
	}

	.titleLine {
		width: 90%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.titleLine image {
		width: 60upx;
		height: 60upx;
	}

	.placeInRow {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.block {
		width: 60upx;
		height: 60upx;
		background-color: #d5d5d5;
		border: #9a9a9a solid 1px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.mask {
		background-color: #e6e6e6;
		box-shadow: 2px 2px 5px 5px #bcbcbc inset;
		border: #8d8d8d solid 1px;
	}

	image {
		width: 45upx;
		height: 45upx;
	}
</style>
