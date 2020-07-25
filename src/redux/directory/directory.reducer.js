const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'Kitchen',
			imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-ideas-calderone-kitchen-006-1583960334.jpg',
			id: 2,
			linkUrl: 'shop/kitchen'
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens'
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
