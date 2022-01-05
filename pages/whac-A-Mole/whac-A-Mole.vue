<template>
	<view class="box">
		<view class="result flex_col flex_col_2">
			<view class="align_l">时间：{{time}}</view>
			<view class="align_r">得分：{{countResult}}</view>
		</view>
		<view class="flex_col flex_col_3 flex_wrap">
			<view class="item" v-for="(item,index) in list" :key="index" @tap="whack(index)">
				<image src="/static/images3/hole.png" mode="aspectFit" class="hole"></image>
				<image src="/static/images3/mouse.png" mode="aspectFit" class="mouse" v-show="item == 1"></image>
				<image src="/static/images3/boom.png" mode="aspectFit" class="boom" v-show="item == 2"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //数值说明 0:无状态,1:老鼠显示,2:砸中状态
				result: 0,
				time: 30,
				flag: true
			}
		},
		mounted() {
			this.showMouse();
			this.downTime();
		},
		computed: {
			// 计算结果，使用计算函数，可方便管理得分基数
			countResult() {
				return this.result;
			}
		},
		onLoad() {
			//横竖屏切换
			plus.screen.lockOrientation('default');
		},
		onUnload() {
			// 页面关闭移除计时器，否则app平台有BUG
			clearTimeout(this.aTime);
			clearInterval(this.bTime);
			clearInterval(this.cTime);
			clearTimeout(this.dTime);
			//横竖屏切换
			plus.screen.lockOrientation('portrait-primary');
		},
		methods: {
			// 锤打地洞事件
			whack(i) {
				// 非老鼠显示状态则结束事件
				if (this.list[i] != 1) {
					return;
				}

				if (!this.flag) {
					uni.showToast({
						title: '时间已结束',
						icon: 'none'
					})
					return;
				}

				this.$set(this.list, i, 2);
				this.result += 100;

				// 创建匿名函数，使当前序号拥有独立作用域（减少BUG产生）
				((j) => {
					//aTime：击打效果持续时间
					this.aTime = setTimeout(() => {
						this.$set(this.list, j, 0);
					}, 800);
				})(i)
			},
			// 显示老鼠
			showMouse() {
				// 获取有效的洞穴,避免重复渲染
				let effective = () => {
					let arr = [];
					this.list.forEach((v, i) => {
						// 将无状态的洞穴添加到可用数组中
						if (v == 0) {
							arr.push(i);
						}
					})
					return arr;
				}
				//bTime：老鼠出来的速度
				this.bTime = setInterval(() => {
					if (!this.flag) {
						return;
					}
					let effectiveArr = effective();

					// 随机获得一个可用的洞穴序号
					let r = Math.floor(Math.random() * effectiveArr.length);

					// 将可用的洞穴显示老鼠
					this.$set(this.list, effectiveArr[r], 1);

					((k, Arr) => {
						//dTime：老鼠出洞的时长
						this.dTime = setTimeout(() => {
							this.$set(this.list, Arr[k], 0);
						}, 1750);
					})(r, effectiveArr)
				}, 375);

			},
			// 重新开始
			restart() {
				this.list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				this.result = 0;
				this.time = 30;
				this.flag = true;
			},
			// 倒计时
			downTime() {
				//cTime:倒计时速度（正常秒速）
				this.cTime = setInterval(() => {
					if (this.time > 0) {
						this.time--;
					} else {
						if (this.flag) {
							this.flag = false;
							showPop();
						}
					}
				}, 1000);

				let showPop = () => {
					uni.showModal({
						title: "游戏结束",
						content: `得分：${this.countResult}`,
						cancelText: "不玩了",
						confirmText: "重新挑战",
						success: (e) => {
							if (e.confirm) {
								this.restart();
							}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #45454d;
	}

	.box {
		.result {
			line-height: 50rpx;
			padding: 50rpx 30rpx;
			font-size: 40rpx;
			color: #fff;
			// >view {
			// 	border: black solid 1rpx;
			// }
		}

		.flex_col {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
		}

		.flex_col.flex_wrap {
			flex-wrap: wrap;
		}

		.item {
			height: 250rpx;
			position: relative;

			// border: 1rpx solid black;
			>image {
				position: absolute;

				&.hole {
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: 1;
				}

				&.mouse {
					width: 66%;
					height: 66%;
					top: 17%;
					left: 17%;
					z-index: 2;
				}

				&.boom {
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: 3;
				}
			}
		}
	}

	.flex_col.flex_col_2>view {
		width: 50%;
	}

	.flex_col.flex_col_3>view {
		width: 33.33333%;
	}

	.flex_col.flex_col_4>view {
		width: 25%;
	}

	.flex_col.flex_col_5>view {
		width: 20%;
	}

	.flex_col.flex_col_6>view {
		width: 16.66666%;
	}

	.align_l {
		text-align: left;
	}

	.align_r {
		text-align: right;
	}

	@media only screen and (orientation:landscape) {

		.flex_col.flex_col_3>view {
			width: 16.6666%;
		}

		.box {
			.result {
				padding: 30rpx;
			}

			.item {
				height: 210rpx;
			}
		}

	}
</style>
