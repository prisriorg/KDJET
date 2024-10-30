"use client"
import React from 'react';
import styles from "@/components/Authe/LoginForm/LoginForm.module.css";
const UserPassword = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",justifyItems:"center",margin:50}}>
            <div className={styles.container}>
                <h1>Change Password</h1>
                <form>
                    <label htmlFor="email">Current Password</label>
                    <div className={styles.customeInput}>
                        <input type="password" name="email" placeholder="Password" autoComplete="off"/>
                        <i className='bx bx-at'></i>
                    </div>
                    <label htmlFor="email">New Password</label>
                    <div className={styles.customeInput}>
                        <input type="password" name="email" placeholder="New Password" autoComplete="off"/>
                        <i className='bx bx-at'></i>
                    </div>
                    <label htmlFor="email">Confirm Password</label>
                    <div className={styles.customeInput}>
                        <input type="password" name="email" placeholder="New Password" autoComplete="off"/>
                        <i className='bx bx-at'></i>
                    </div>
                    <button className={styles.login} onClick={handleSubmit}>Change</button>
                </form>

            </div>
        </div>
        </>
    );
};

export default UserPassword;