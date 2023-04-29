import styles from '@/styles/Form.module.css';
import { FormEvent } from 'react';

export default function Form() {
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = Object.fromEntries(new FormData(form).entries());

        try {
            await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            form.reset();
        } catch (e) {
            console.error('Error submitting form', e);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" />

            <label htmlFor="genre">Genre</label>
            <input id="genre" type="text" name="genre" />

            <label htmlFor="author">Author</label>
            <input id="author" type="text" name="author" />

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" style={{ height: '200px' }} />

            <label htmlFor="image">Image(optional)</label>
            <input id="image" type="text" name="image" />

            <button type="submit">Submit</button>
        </form>
    );
}
