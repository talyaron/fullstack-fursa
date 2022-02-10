import React from 'react';
import styles from './BurgerMenu.module.scss';

interface MenuProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

function BurgerMenu(props: MenuProps) {
    const { children, open, onClose } = props;

    function handleKeypress(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.keyCode === 27) {
            onClose();
        }
    }

    React.useEffect(() => {
        function fn(event: KeyboardEvent) {
            if (event.keyCode === 27) {
                onClose();
            }
        }

        document.addEventListener('keydown', fn);

        return () => document.removeEventListener('keydown', fn);
    }, [onClose]);

    return (
        <div>
            <div
                onClick={onClose}
                role="presentation"
                onKeyPress={handleKeypress}
                data-open={JSON.stringify(open)}
                className={styles.overlay}
            />
            <nav data-open={JSON.stringify(open)} className={styles.menu}>
                {children}
            </nav>
        </div>
    );
}

export default BurgerMenu;