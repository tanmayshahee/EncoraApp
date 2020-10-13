import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {addNote, editNote, resetNote} from '../../actions/addEditNotes';
import {toggleToast} from '../../actions/toast';
import { ImPlus } from 'react-icons/im';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './add-edit-list.scss';

const AddEditList = (props) => {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(()=> {
        if(props.currentEditableNote.key){
            setTitle(props.currentEditableNote.title);
            setBody(props.currentEditableNote.body);
        }

    },[props.currentEditableNote]);

    const handleSubmit = (e) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log('validation failed');
            setValidated(true);
        }else{
            console.log('validation success');
            setValidated(false);
            if(props.currentEditableNote.key){
                let editNote = {
                    key: props.currentEditableNote.key,
                    editIndex: props.currentEditableNote.editIndex,
                    title,
                    body,
                }
                props.editNote(editNote);
                props.toggleToast({showToast: true, message: 'Note Edited'});
            }else{
                let newNote = {
                    key: new Date().getTime(),
                    title,
                    body
                };
                props.addNote(newNote);
                props.toggleToast({showToast: true, message: 'Note Added'});
            }
            resetForm();
        }
    }

    const resetForm = () => {
        setTitle('');
        setBody(''); 
        props.resetNote();
    }

    const onValueChange = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value);
        }else{
            setBody(e.target.value);
        }
    }    
    return (
        <div className='add-edit-list-main'>
            <div className='button-wrapper'>
                <div className='button-title' onClick={resetForm}>
                   <span className='plus-icon'><ImPlus /></span> 
                    Add Note
                </div>
            </div>

            <div className='add-edit-list-form'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={onValueChange} value={title} name='title' placeholder="title" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter Title.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" onChange={onValueChange} value={body} name='body' rows="3" required/>
                        <Form.Control.Feedback type="invalid">
                            Please enter Body.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className='button-wrapper'>
                        <Button type="submit" variant="primary">
                            Save
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return{
        ...props,
        currentEditableNote: state.addEditNotes.currentEditableNote
    }
}

export default connect(mapStateToProps, {addNote, toggleToast, editNote, resetNote})(AddEditList);