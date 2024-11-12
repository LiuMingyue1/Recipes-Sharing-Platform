import React from 'react';

const ContactText = (props) => {
    return (
       <>
            <div>
                <dt class="text-base font-semibold leading-7 text-gray-900">{props.title}</dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">{props.text}</dd>
            </div>
        </>
    );
}

export default ContactText;