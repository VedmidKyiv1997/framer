import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariant = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
};

const modalVariant = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
};

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    variants={backdropVariant}
                    animate="visible"
                    exit="hidden"
                    initial="hidden"
                    className="backdrop"
                    onClick={() => setShowModal(false)}
                >
                    <motion.div className="modal" variants={modalVariant}>
                        <p>Want to make another pizza</p>
                        <Link to="/">
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
