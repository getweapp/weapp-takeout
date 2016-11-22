var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'热销菜品'
			},
			{
				id:2,
				name:'热菜'
			},
			{
				id:3,
				name:'凉菜'
			},
			{
				id:4,
				name:'套餐'
			}
		],
		dishesList:[
			[
				{
					name:"鸡翅",
					price:38,
					num:1,
					id:1,
					img:'/Images/jichi.png'
				},
				{
					name:"生蚝",
					price:58,
					num:1,
					id:29,
					img:'/Images/shenghao.png'
				},
				{
					name:"热狗",
					price:88,
					num:1,
					id:2,
					img:'/Images/regou.png'
				}
			],
			[
				{
					name:"小龙虾",
					price:18,
					num:1,
					id:3,
					img:'/Images/xiaolongxia.png'
				},
				{
					name:"烤鱼",
					price:58,
					num:1,
					id:4,
					img:'/Images/shenghao.png'
				}
			],
			[
				{
					name:"韭菜",
					price:18,
					num:1,
					id:5,
					img:'/Images/jiucai.png'
				},
				{
					name:"牛肉串",
					price:8,
					num:1,
					id:6,
					img:'/Images/niurouchuan.png'
				}
			],
			[]
		],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},500)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let price = event.currentTarget.dataset.price*1;
		let flag = true;
		let	cart = this.data.cart;
		let total = this.data.cartTotal;
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
					total -= price;
				}
			})
		}
		if(flag){
			cart.push(dish);
			total += price;
		}
		this.setData({
			cartTotal:total
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange()
	}
})