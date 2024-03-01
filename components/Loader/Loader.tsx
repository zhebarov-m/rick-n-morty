import React from 'react';
import Image from "next/image";
import styles from  './Loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.loaderPortal}>
            <Image src="https://media.tenor.com/nVzmP7Th76IAAAAi/adventure-time-portal.gif" alt={'portal'} width={250} height={250} />
        </div>
    );
};

export default Loader;
