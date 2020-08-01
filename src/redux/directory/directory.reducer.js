const INITIAL_STATE = {
	sections: [
		{
			title: 'Drinks',
			imageUrl: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage_wrbm_large.jpg',
			id: 1,
			linkUrl: 'shop/drinks'
		},
		{
			title: 'Household',
			imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-calderone-kitchen-006-1583960334.jpg',
			id: 2,
			linkUrl: 'shop/household'
		},
		{
			title: 'Fruit',
			imageUrl: 'https://www.snowgoose.com.au/site/assets/media/images/product-images-2016/Mixed-FruitAerial.png',
			id: 3,
			linkUrl: 'shop/fruit'
		},
		{
			title: 'Vegetable',
			imageUrl: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
			size: 'large',
			id: 4,
			linkUrl: 'shop/vegetable'
		},
		{
			title: 'Meat',
			imageUrl: 'https://www.supermarketperimeter.com/ext/resources/2019/12/MeatPoultryProducts_Lead.jpg',
			size: 'large',
			id: 5,
			linkUrl: 'shop/meat'
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.tyoe) {
		default:
			return state;
	}
};

export default directoryReducer;
