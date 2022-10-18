import { ReactNode } from 'react';
import styles from './form.module.css';

interface Props {
    children: ReactNode;
    title: string;
    submitText: string;
}

const Form = ({ title, children, submitText }: Props) => (
    <div className={styles.form}>
        <div>{title}</div>

        {children}

        <input type="submit" value={submitText} />
    </div>
);

export default Form;