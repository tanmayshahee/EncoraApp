import React from 'react';
import { connect } from 'react-redux';
import {deleteNote, setCurrentEditableNote} from '../../actions/addEditNotes';
import {toggleToast} from '../../actions/toast';
import { ImCancelCircle } from 'react-icons/im'
import './list-view.scss';

const ListView = (props) => {

    const deleteNote = (item,index) => {
         let itemToDelete = {...item};
         itemToDelete.deletedIndex = index;
         props.deleteNote(itemToDelete);
         props.toggleToast({showToast: true, message: 'Note Deleted'});
    }

    const editNote = (item, index) => {
        let itemToEdit = {...item};
        itemToEdit.editIndex = index; 
        props.setCurrentEditableNote({itemToEdit});
    }

    const renderNotes = () => {
        return props.notes.map((item, index) => {
            return (
                <div className='list-item-wrapper' key={item.key}>
                        <div className='item-content' onClick={()=> editNote(item, index)}>
                            <div className='item-title'>{item.title}</div>
                            <div className='item-body'>{item.body}</div>
                        </div>
                        <div className='icon-cross' onClick={() => deleteNote(item, index)}>
                        <ImCancelCircle />
                        </div>
                </div>
            )
        });
    };

    return (
        <div className='list-view-parent'>
            {props.notes.length > 0 ?
                renderNotes()
                :
                <div className='no-notes'>No Notes Present</div>
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        notes: state.addEditNotes.notes,
    }
}
export default connect(mapStateToProps, {deleteNote, toggleToast, setCurrentEditableNote})(ListView);