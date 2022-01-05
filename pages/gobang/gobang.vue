<template>
	<view class="content">
		<view class="checkerboard">
			<view class="y" v-for="(y, yIndex) in pieceList" :key="yIndex">
				<view class="x" v-for="(x, xIndex) in y" :key="xIndex">
					<view class="x-line"
						:class="(xIndex == 0 ? 'left-line ' : '') + (xIndex == 14 ? 'right-line' : '')">
					</view>
					<view class="y-line"
						:class="(yIndex == 0 ? 'top-line ' : '') + (yIndex == 14 ? 'bottom-line' : '')">
					</view>
					<view class="piece" :class="x.pieceStatus == 1 ? 'white': x.pieceStatus == 2 ? 'black': ''"
						@click="setPiece(xIndex, yIndex)">
					</view>
				</view>
			</view>
		</view>
		<view class="menu-box">
			<view class="btn" @click="initCheckerboard()" type="default">重来</view>
			<view class="btn" @click="lastStep()" type="default">悔棋</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//总步数
				step: 1,
				//二维数组，对应棋盘的落子状态，要么黑子（2），要么白子（1）以及无子状态
				pieceList: [],
				//一维数组，里面存放对象，记录棋子的落子记录 y,x
				stepList: []
			}
		},
		onLoad() {
			this.initCheckerboard()
		},
		methods: {
			// 初始化棋盘
			initCheckerboard() {
				this.step = 1
				this.pieceList = []
				this.stepList = []
				for (var i = 0; i < 15; i++) {
					let row = []
					for (var j = 0; j < 15; j++) {
						row.push({
							pieceStatus: 0
						})
					}
					this.pieceList.push(row)
				}
			},
			
			// 悔棋（上一步）
			lastStep() {
				let step = this.stepList[this.stepList.length - 1]
				// console.log("退棋",this.stepList.length)
				this.pieceList[step.y][step.x].pieceStatus = 0
				this.step = this.stepList.length 
				this.stepList.pop()
			},

			// 落子
			setPiece(xIndex, yIndex) {
				
				// 下过的位置不能再下
				if (this.pieceList[yIndex][xIndex].pieceStatus !== 0) {
					return
				}
				
				// 记录走过的路径
				this.stepList.push({
					x: xIndex,
					y: yIndex
				})
				
				// 放置棋子
				this.pieceList[yIndex][xIndex].pieceStatus = this.step % 2 + 1
				// console.log("放棋",this.step)
				// console.log(this.pieceList)
				// 如果胜利，弹出弹窗
				if (this.checkWin(xIndex, yIndex, this.step % 2 + 1)) {
					let title = this.step % 2 ? '游戏结束，黑棋胜利' : '游戏结束，白棋胜利'
					let that = this
					uni.showModal({
						title: title,
						success(res) {
							if (res.confirm) {
								that.initCheckerboard()
							} else if (res.cancel) {

							}
						}
					})
				}

				this.step++
			},

			// 判断胜利
			checkWin(xIndex, yIndex, status) {
				let num = 0,
					maxNum = 0
					
				// 当前行最大连续数量
				for (let x = 0; x <= 14; x++) {
					let currentStatus = this.pieceList[yIndex][x].pieceStatus
					if (currentStatus == status) {
						num++	
						if (maxNum < num) {
							maxNum = num
						}
					} else {
						num = 0
					}
				}
				num = 0

				// 当前列最大连续数量
				for (let y = 0; y <= 14; y++) {
					let currentStatus = this.pieceList[y][xIndex].pieceStatus
					if (currentStatus == status) {
						num++
						if (maxNum < num) {
							maxNum = num
						}
					} else {
						num = 0
					}
				}
				num = 0

				// 左上到右下方向  正：x从0 ，y到14  负:y从0 ，x到14
				for (let x = 0, y = yIndex - xIndex; x <= 14; x++, y++){
					if (x < 0 || y < 0 || x > 14 || y > 14) {
						continue
					}
					let currentStatus = this.pieceList[y][x].pieceStatus
					// console.log("第一",x,y)
					if (currentStatus == status) {
						num++
						if (maxNum < num) {
							maxNum = num
						}
					} else {
						num = 0
					}
				}
				
				num = 0
				// 左下到右上方向
				for (let x = 0, y = yIndex + xIndex; x <= 14; x++, y--) {
					if (x < 0 || y < 0 || x > 14 || y > 14) {
						continue
					}
					let currentStatus = this.pieceList[x][y].pieceStatus
					// console.log("第二",x,y)
					if (currentStatus == status) {
						num++
						if (maxNum < num) {
							maxNum = num
						}
					} else {
						num = 0
					}
				}

				return maxNum >= 5
			}
		}
	}
</script>

<style>
	page {
		background: url(../../static/images2/bg.png);
	}
	.content {
		padding-top: 200rpx;
	}
	
	/* 棋盘 */
	.checkerboard {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		background-color: skyblue;
		width: 600rpx;
		position: relative;
		margin: auto;
	}

	/* 列 */
	.y {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* 行 */
	.x {
		width: 40rpx;
		height: 40rpx; 
		text-align: center;
		align-items: center;
		box-sizing: border-box;
		position: relative;
	}

	/* 列的线 */
	.y-line {
		width: 2rpx;
		height: 40rpx;
		position: absolute;
		top: 0;
		left: 19rpx;
		z-index: -1;
		background-color: #333;
		z-index: 1;
	}

	/* 行的线 */
	.x-line {
		width: 40rpx;
		height: 2rpx;
		position: absolute;
		left: 0;
		top: 19rpx;
		z-index: -1;
		background-color: #333;
		z-index: 1;
	}

	/* 最左边的线 */
	.left-line {
		left: 20rpx;
		width: 20rpx;
	}

	/* 最右边的线 */
	.right-line {
		right: 20rpx;
		width: 20rpx;
	}

	/* 最上边的线 */
	.top-line {
		top: 20rpx;
		height: 20rpx;
	}

	/* 最下边的线 */
	.bottom-line {
		bottom: 20rpx;
		height: 20rpx;
	}

	/* 棋子 */
	.piece {
		width: 38rpx;
		height: 38rpx;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	/* 黑棋 */
	.black {
		background-color: #333;
	}

	/* 白棋 */
	.white {
		background-color: #eee;
	}
	
	/* 功能菜单 */
	.menu-box {
		display: flex;
		justify-content: space-around;
		margin-top: 40rpx;
	}
	
	/* 按钮 */
	.btn {
		width: 200rpx;
		height: 60rpx;
		border-radius: 30rpx;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #D6A05B;
		color: #fff;
	}
</style>
