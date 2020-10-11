import React from 'react';
import { connect } from 'react-redux';
import {deleteNote} from '../../actions/addEditNotes';
import { ImCancelCircle } from 'react-icons/im'
ImCancelCircle
import './list-view.scss';

const ListView = (props) => {

    const deleteNote = (item,index) => {
         console.log(item);
         let itemToDelete = {...item};
         itemToDelete.deletedIndex = index;
         console.log(itemToDelete);
         props.deleteNote(itemToDelete);
    }

    const renderNotes = () => {
        return props.notes.map((item, index) => {
            return (
                <div className='list-item-wrapper' key={item.key}>
                        <div className='item-content'>
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
        notes: state.notes,
    }
}
export default connect(mapStateToProps, {deleteNote})(ListView);