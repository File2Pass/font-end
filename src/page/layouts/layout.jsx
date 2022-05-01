import React, { useState, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import Layout from './index'
import Post from '../post'
import Look from '../look'


export default function Layouts() {
    return (
        <div>
            {
                <Layout>
                    <Post />
                    <Look ></Look>
                </Layout>
            }
        </div>
    )
}
