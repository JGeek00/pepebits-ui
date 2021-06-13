import React, {useEffect, useState} from 'react';

const Toast = ({type, text, icon, showToast, hideToast, duration}) => {
    const [toastClass, setToastClass] = useState("");
    const [toastDisplay, setToastDisplay] = useState({display: "none"});

    let displayInterval;
    let hideInterval;

    useEffect(() => {
        if (showToast) {
            display();
        }
        else {
            hide();
        }
    }, [showToast])

    const display = () => {
        clearInterval(hideInterval);
        setToastDisplay({display: "flex"});
        setToastClass('show');
        hideInterval = setInterval(() => {
            hide();
            hideToast(false);
            clearInterval(hideInterval);
        }, duration);
    }

    const hide = () => {
        clearInterval(displayInterval);
        setToastClass('hide');
        displayInterval = setInterval(() => {
            setToastDisplay({display: "none"});
            clearInterval(displayInterval);
        }, 500);
    }

    let toastIcon;
    if (icon) {
        toastIcon = <i class={icon} aria-hidden="true"></i>;
    }
    else {
        switch (type) {
            case 'success':
                toastIcon = <i className="fa fa-check" aria-hidden="true"></i>;
                break;
        
            case 'warning':
                toastIcon = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
                break;
        
            case 'error':
                toastIcon = <i className="fa fa-times" aria-hidden="true"></i>;
                break;
        
            default:
                toastIcon = <i className="fa fa-info" aria-hidden="true"></i>;
                break;
        }
    }

    return (
        <div className={`toastContainer ${toastClass}`} style={toastDisplay}>
            <div className={`toastBubble ${type}`}>
                {toastIcon}
                <div>{text}</div>
            </div>
        </div>
    );
}
 
export default Toast;