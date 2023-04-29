import styles from '@/styles/Form.module.css';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';

export default function Form() {
    const router = useRouter();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = Object.fromEntries(new FormData(form).entries());
        formData.timestamp = new Date().toISOString();

        try {
            await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            form.reset();
            form.classList.add('disappear');
            document.getElementsByTagName('h1')[0].classList.add('disappear');
            setTimeout(() => {
                router.push('/articles');
            }, 550);
        } catch (e) {
            console.error('Error submitting form', e);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="title">
                Title
                <input id="title" type="text" name="title" />
            </label>

            <label htmlFor="genre">
                Genre
                <input id="genre" type="text" name="genre" />
            </label>

            <label htmlFor="author">
                Author
                <input id="author" type="text" name="author" />
            </label>

            <label htmlFor="image">
                Image(optional)
                <input id="image" type="text" name="image" />
            </label>

            <label htmlFor="content">
                Content
                <textarea id="content" name="content" style={{ height: '200px' }} />
            </label>

            <button name="submit" type="submit">
                Submit
            </button>
        </form>
    );
}
