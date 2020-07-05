import ShopActionTypes from './shop.types';
import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
	payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionStart());
		// fetch('https://firestore.googleapis.com/v1/projects/my-clothing-ecommerce/databases/(default)/documents/collections')
		// 	.then((response) => response.json())
		// 	.then((collections) => console.log(collections));

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionFailure(error.message)));
	};
};
