import React from 'react';
import Header from '../../Components/Header/Header';
import ListView from '../../Components/ListView/ListView';
import AddEditList from '../../Components/AddEditList/AddEditList';
import Toast from '../../Components/Toast/Toast';
import './add-edit-notes.scss';
const AddEditNotes = (props) => {
    return (
        <>
            <Toast />  
            <Header />
            <div className='add-edit-notes-body'>
            <ListView />
            <AddEditList />
            </div> 
        </>
    )
};

export default AddEditNotes;