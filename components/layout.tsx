import {  ReactNode } from 'react';
import Nav from './nav';
import styles from './layout.module.css';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => (
    <div className={styles.container}>
        <Nav></Nav>

        <main>
            {children}
        </main>
    </div>
);

export default Layout;