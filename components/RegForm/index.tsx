'use client';
import React from 'react';
import styles from './RegForm.module.scss'
import {useFormik} from "formik";

export const RegForm = () => {
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}