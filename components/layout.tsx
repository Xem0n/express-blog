import {  ReactNode } from 'react';
import Nav from './nav';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => (
    <>
        <Nav></Nav>
        {children}
    </>
);

export default Layout;