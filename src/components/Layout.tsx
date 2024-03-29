import React from 'react';
import Header from './Header';
import Menu from './Menu';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className = "layout">
            {children}
        </div>
    );
};