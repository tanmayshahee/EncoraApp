import React from 'react';
import { connect } from 'react-redux';
import {toggleToast} from '../../actions/toast';
import Toast from 'react-bootstrap/Toast';

const ToastMessage = (props) => {
    return(
        <div
          style={{
            position: 'absolute',
            top: props.showToast ? '65px' : '-75px',
            right: props.showToast ? '50%' : '-75px',
            minHeight: '40px',
            width: '150px',
            borderRadius: '8px',
          }}
        >
          <Toast onClose={() => props.toggleToast({showToast: false})} show={props.showToast} delay={3000} autohide>
            <Toast.Body>{props.message}</Toast.Body>
          </Toast>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return{
        ...props,
        showToast: state.toast.showToast,
        message: state.toast.message
    }
}
export default connect(mapStateToProps, {toggleToast})(ToastMessage);
