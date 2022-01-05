<template>
	<view>
		<view class="PingTu">
			<!-- VUE中通过v-bind指令设置标签的属性，v-bind: 简写为： -->
			<view class="item" :class="item.class" :style="[itemStyle,{'background-image': 'url('+url+')'}]" v-for="(item,index) in levelArray"
			 :data-index="index" :key="index" @tap="change"></view> <!-- @绑定事件 也可以写为v-on-->
		</view>
		<view class="btn-group">
			<view class="btn-green" @tap="start">{{startText}}</view> <!-- 开始或重新开始 -->
			<view class="btn-green" @tap="back">返回</view>
		</view>
		<view class="tip">
			<p class="tip-first">游戏规则：</p>
			<p>1. 仔细观察上图，并记忆</p>
			<p>2. 点击开始，进入游戏</p>
			<p>3. 此时图片被打乱，点击空白格附近的图片，将图片移动，最终将图片还原</p>
			<p>4. 当图片还原成功，后会弹出游戏结束提示框，表示游戏结束</p>
		</view>
	</view>
</template>

<script>
	let that;
	let level = 3;
	export default {
		props: {
			url: {
				default: 'https://images-1251347845.cos.ap-shanghai.myqcloud.com/uPic/HarmonyOS.jpg' //https://cdn.jsdelivr.net/gh/zhao-v/blog-img@master/uPic/1.jpg
			}, //这里采用自己图床存储拼图所用到的图片，以减少软件安装包的体积
			timeOut: {
				default: -1
			}
		},
		data() {
			return {
				levelArray: [],
				startText: '开始游戏',
				gameStart: false,
			};
		},
		created() {
			that = this;
			let array = {}; //创建对象
			for (var i = 1; i <= level * level; i++) {
				array[i] = {
					value: i,
					class: 'pt_item_' + i
				};
			}
			that.levelArray = array;
		},
		// 计算属性
		computed: {
			itemStyle() {
				let res = uni.getSystemInfoSync();
				let width = parseInt(res.windowWidth * 0.33);
				return {
					width: width + 'px',
					height: width + 'px',
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: -1
				})
			},
			start() {
				let array = {};
				for (var i = 1; i <= level * level; i++) {
					array[i] = {
						value: i,
						class: 'pt_item_' + i
					};
				}
				array = that.rand(array);
				that.levelArray = array;
				// console.log(this.levelArray)
				that.gameStart = true; //将gameStart改为true,游戏开始
				that.startText = '重新开始'; //将按钮文本内容改为重新开始
			},
			//随机排序
			rand(arr) {
				let old_arr = {};
				old_arr = arr;
				// console.log(arr);
				let len = level * level;
				for (let i in arr) { //遍历arr对象
					// console.log("i= " + i)
					if (i != len) { //排除最后一个
						let indx = Math.ceil(Math.random() * (len - 1)); //控制随机数的范围以及确保为整数
						let temp = arr[indx];
						arr[indx] = arr[i];
						arr[i] = temp;
					}
				}
				// 逆序数验证 在拼图中,逆序数为偶数,才能拼图成功,奇数是不能成功的!!
				let last = 0;
				let num = 0;
				for (let i in arr) {
					for (let j in arr) {
						if (j > i && arr[i].value > arr[j].value) {
							num++;
						}
					}
				}
				// console.log(num);
				if (num % 2 != 0) {
					arr = that.rand(old_arr)
				}
				return arr;
			},
			change(e) {
				let ele = e.currentTarget.dataset.index; //获取数组下标
				let emptyNum = parseInt(level * level);
				// console.log(emptyNum)
				if (that.gameStart && emptyNum != that.levelArray[ele].value) {
					//点击块所对应的上面块的value
					let topNum = that.levelArray[ele - level] ? that.levelArray[ele - level].value : -1;
					//左
					let leftNum = that.levelArray[ele - 1] ? that.levelArray[ele - 1].value : -1;
					//右
					let rightNum = that.levelArray[parseInt(ele) + 1] ? that.levelArray[parseInt(ele) + 1].value : -1;
					//下
					let bottomNum = that.levelArray[parseInt(ele) + parseInt(level)] ? that.levelArray[parseInt(ele) + parseInt(level)]
						.value : -1;
					let temp = {};
					// console.log(topNum, leftNum, rightNum, bottomNum);
					//移动当前选择的块
					switch (emptyNum) { //9
						case topNum:
							{
								temp = that.levelArray[ele];
								that.levelArray[ele] = that.levelArray[ele - level];
								that.levelArray[ele - level] = temp;
								break;
							}
						case leftNum:
							{
								if ((ele - 1) % 3 != 0) {
									temp = that.levelArray[ele];
									that.levelArray[ele] = that.levelArray[ele - 1];
									that.levelArray[ele - 1] = temp;
								}
								break;
							}
						case rightNum:
							{
								if (ele % 3 != 0) {
									temp = that.levelArray[ele];
									that.levelArray[ele] = that.levelArray[parseInt(ele) + 1];
									that.levelArray[parseInt(ele) + 1] = temp;
								}
								break;
							}
						case bottomNum:
							{
								temp = that.levelArray[ele];
								that.levelArray[ele] = that.levelArray[parseInt(ele) + parseInt(level)];
								that.levelArray[parseInt(ele) + parseInt(level)] = temp;
								break;
							}
					}
	
					//检查是否成功了
					if (that.isSuccess(that.levelArray)) {
						uni.showToast({
							icon: 'right',
							title: '恭喜！完成拼图'
						})
						that.gameStart = false;
						that.startText = '再玩一次';
						that.$emit('result', 'success');
					}
				}
			},
			isSuccess(arr) {
				// console.log(arr);
				let temp = -1;
				for (let s in arr) {
					if (arr[s].value > temp) {
						temp = arr[s].value;
					} else {
						return false;
					}
				}
				return true;
			}
		}
	}
</script>

<style>
	@import url("/pages/puzzle/puzzle.css");
</style>
