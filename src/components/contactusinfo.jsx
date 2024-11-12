import React from 'react';

const ContactUsInfo = (props) => {
    return (
       <>
        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">        
                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                            <p class="mt-4 leading-7 text-gray-600">We would love to hear from you!</p>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Call Us : </h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div class="mt-1">
                                    <dt class="sr-only">Phone number</dt>
                                    <dd>+1 (571) 000-0000</dd>
                                    </div>
                                </dl>
                            </div>
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Email Us :</h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                    <dt class="sr-only">Email</dt>
                                    <dd><a class="font-semibold text-blue-600" href="mailto:press@example.com">contact@voyage.org</a></dd>
                                    </div>
                                </dl>
                            </div>        
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
                            <p class="mt-4 leading-7 text-gray-600">We would love to see you!</p>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Cityville</h3>
                                <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>123 Main Street, 
                                        Suite 400
                                    </p>
                                    <p>Cityville, State-54321</p>
                                    <p>United States</p>
                                </address>
                            </div>
                                <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Metropolis</h3>
                                <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>789 Business Avenue, 
                                    Office Suite 102</p>
                                    <p>Metropolis, State-98765</p>
                                    <p>United States</p>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default ContactUsInfo;