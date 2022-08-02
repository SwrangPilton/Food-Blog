import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function ModalTwo({ show, Delete }) {
    const [open, setOpen] = useState(show);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="rounded-2xl">
            <Modal open={open} center>
                <div className="p-12">
                    <h2>Are you sure to delete ?</h2>
                    <div className="flex justify-between">
                        <button
                            onClick={Delete}
                            className="lg:block mt-5  bg-red-600 hover:bg-red-500 p-2 text-gray-200 rounded-lg">Delete</button>
                        <button onClick={onCloseModal}
                            className="lg:block mt-5  bg-blue-600 hover:bg-blue-500 p-2 text-gray-200 rounded-lg">Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
