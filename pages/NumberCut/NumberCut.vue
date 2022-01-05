<template>
	<view>
		<view class="content">
			<view class="drawView">
				<view class="line">
					<view v-for="(line,i) in maskMap" :key="'collimit-'+i"
					 :style="{width:getBlockSize(), height:getBlockSize()}" style="color: #aaaaaa;">{{i+1}}</view>
				</view>
				<view class="line" v-for="(line,i) in userMap" :key="'userMapLine-'+i">
					<view :style="{width:getBlockSize(), height:getBlockSize()}" style="color: #aaaaaa;">{{i+1}}</view>
					<view class="block" :style="{width:getBlockSize(), height:getBlockSize()}"
					 v-for="(block,j) in line" :key="'block-'+i+'-'+j"
					 @tap="blockClick(i,j)"
					 >
						<view v-if="userMap[i][j] == 1" class="userMark1"></view>
						<view v-else></view>
					</view>
					<view :style="{width:getBlockSize(), height:getBlockSize()}"
					 :class="{'textGreen':isSame(false,i)}">{{getMustSum(false, i)}}</view>
				</view>
				<view class="line">
					<view v-for="(line,i) in maskMap" :key="'collimit-'+i"
					 :style="{width:getBlockSize(), height:getBlockSize()}"
					 :class="{'textGreen':isSame(true,i)}">{{getMustSum(true, i)}}</view>
				</view>
			</view>
			<view class="content">
				<view class="title">难易模式选择</view>
				<radio-group @change="modeChange">
					<radio value="0" :checked="action == 0">
						<view class="block" :style="{width:getBlockSize(), height:getBlockSize()}">
							<view class="userMark0">简单</view>
						</view>
					</radio>
					<radio value="1" :checked="action == 1">
						<view class="block" :style="{width:getBlockSize(), height:getBlockSize()}">
							<view class="userMark1">中等</view>
						</view>
					</radio>
					<radio value="2" :checked="action == 2">
						<view class="block" :style="{width:getBlockSize(), height:getBlockSize()}">
							<view class="userMark2">困难</view>
						</view>
					</radio>
				</radio-group>
			</view>
			<view class="content">
				<view class="title">游戏规则</view>
				<view style="width: 75%;"><b>1.</b>以上{{mapSize}}*{{mapSize}}的区域内每个方格要么选中要么不选中</view>
				<view style="width: 75%;"><b>2.</b>选择你心目中数字为1的块，尽可能使得每列每行你所选中的数字块符合边缘给定的预期数字边缘要求</view>
				<view style="width: 75%;"><b>3.</b>左上边缘显示的数字是每行每列的分值（第m行/列每个块的分值是m）</view>
				<view style="width: 75%;"><b>4.</b>右下边缘显示预期数字和——每行每列所有选中单元格值的和：例如某行是：[1,0,1,1,0]，那么预期和是8：(1*1+0*2+1*3+1*4+0*5)</view>
				<view style="width: 75%;"><b>5.</b>当所有选择数字均满足预期条件后，游戏结束</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//地图大小 n*n
				//初始时是简单的，地图大小是4
				mapSize:4,
				//标记地图
				maskMap:[],
				//用户标注地图
				userMap:[],
				//难易程度选择
				action:0
			}
		},
		onLoad() {
			this.initMaps()
		},
		methods: {
			//初始标记地图和用户标注地图
			initMaps(){
				this.maskMap = []
				this.userMap = []
				for(var i=0;i<this.mapSize;i++){
					this.maskMap.push([])
					this.userMap.push([])
					for(var j=0;j<this.mapSize;j++){
						this.userMap[i].push(0)
						this.maskMap[i].push(Math.random()>=0.5?1:0)
					}
				}
				console.log(this.maskMap)
			},
			getBlockSize(multi=1){
				return (multi*parseInt(700/(this.mapSize+4)))+'upx'
			},
			/**
			 * 获得原本的标记地图的数据
			 */
			getMustSum(isCol=false, index=0){
				var sum=0;
				if (!isCol){//如果是行
					for (var i=0;i<this.mapSize;i++){
						sum += this.maskMap[index][i]*(i+1);
					}
				}
				else{ //如果是列
					for (var i=0;i<this.mapSize;i++){
						sum += this.maskMap[i][index]*(i+1);
					}
				}
				return sum;
			},
			modeChange(e){
				console.log(e.detail.value)
				this.action=e.detail.value;
				if(this.action==0){
					this.mapSize=4;
				}else if(this.action==1){
					this.mapSize=6;
				}else {
					this.mapSize=8;
				}
				this.initMaps();
			},
			/**
			 * 获得用户的标记地图的数据
			 */
			getUserSum(isCol=false, index=0){
				var sum=0;
				if (!isCol){
					for (var i=0;i<this.mapSize;i++){
						sum += this.userMap[index][i]*(i+1);
					}
				}
				else{
					for (var i=0;i<this.mapSize;i++){
						sum += this.userMap[i][index]*(i+1);
					}
				}
				return sum;
			},
			isSame(isCol=false, index=0){
				var must = this.getMustSum(isCol, index)
				var user = this.getUserSum(isCol, index)
				
				return must == user;
			},
			blockClick(i,j){
				if(this.userMap[i][j] == 1) 
					this.userMap[i][j] = 0;
				else 
					this.userMap[i][j] = 1;
				
				this.$forceUpdate();
				//判断游戏是否完成
				var isComplete = true;
				for (var i=0;i<this.mapSize;i++){
					if(!this.isSame(true,i) || !this.isSame(false,i)){
						isComplete = false;
						break;
					}
				}
				if(isComplete){
					uni.showModal({
						//提示的标题
						title:'游戏结束',
						//提示的内容
						content:'你找到了所有的为1的地方',
						//确定按钮的文字，默认为"确定"，最多 4 个字符
						confirmText:'再来一局',
						//取消按钮的文字，默认为"取消"，最多 4 个字符
						cancelText:'返回',
						//接口调用成功的回调函数
						success: (res) => {
							//confirm为 true 时，表示用户点击了确定按钮
							if(res.confirm){
								this.initMaps()
							}
							//cancel为 true 时，表示用户点击了取消
							else if(res.cancel){
								uni.navigateBack()
							}
						}
					})
				}
			}
		}
	}
</script>

<style>
	.content, .drawView, .drawView view, .block view, .colsum {
		display: flex;
		//纵向排列
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.rowsum, .drawView .line{
		display: flex;
		//从左到右排列（左对齐），默认的排列方式。
		flex-direction: row;
		align-items: center;
		//内容居中
		justify-content: center;
	}
	
	.drawView .line{
		font-weight: bold;
	}
	
	.block, .colsum, .rowsum {
		border: #808080 solid 1px;
	}
	
	.block view{
		margin: 5%;
		width: 90%;
		height: 90%;
		border-radius: 10px;
		font-size: 20px;
		background: none;
		color: #000000;
	}
	
	.block .userMark0{
		background-color: #333333;
		color: #FFFFFF;
	}
	
	.block .userMark1{
		background-color: #F0AD4E;
		color: #000000;
	}
	
	.block .userMark2{
		background-color: red;
		color: #000000;
	}
	
	.title{
		font-size: 30upx;
		font-weight: bold;
	}
	
	.textRed{
		color: #f00;
	}
	
	.textBlack{
		color: #000000;
	}
	
	.textGrey{
		color: #6889b5;
	}
	
	.textGreen{
		color: #4CD964;
	}
	
	.textOrange{
		color: #F0AD4E;
	}
</style>
