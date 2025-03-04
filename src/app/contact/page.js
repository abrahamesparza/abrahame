'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { sendEmail } from '../utils/send-email';

import styles from '../page.module.css';
import Navigation from '../components/navigation';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [ emailSent, setEmailSent ] = useState(false);
  const router = useRouter();

  async function onSubmit(data) {
    try {
        await sendEmail(data);
        setEmailSent(true);
        reset();
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } catch (err) {
        console.error('Error sending email:', err);
      }
  }



  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <Navigation />
            {!emailSent ? (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                    type="text"
                    placeholder="Full Name"
                    className={styles.input}
                    {...register('name', { required: true })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                    type="email"
                    placeholder="example@domain.com"
                    className={styles.input}
                    {...register('email', { required: true })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                    rows={4}
                    placeholder="Type your message"
                    className={styles.textarea}
                    {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div>
                    <button className={styles.submitButton}>Submit</button>
                </div>
                </form>
            ) : (
                <div className={`${styles.successMessage} ${emailSent ? styles.show : ''}`}>
                    <p>Email sent 😀</p>
                </div>
            )}
        </div>
    </div>
  );
};