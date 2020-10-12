import React from 'react';
import Loadable from 'react-loadable';

export const App = Loadable({
	loader: () => import('./App'),
	loading() {
		return <div>Loading...</div>
	}
});
export const AddEditNotes = Loadable({
	loader: () => import('./Pages/AddEditNotes/AddEditNotes'),
	loading() {
		return <div>Loading...</div>
	}
});