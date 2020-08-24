import React from 'react'
import '../../scss/app/_mainApp.scss'
import '../../scss/utils/_all.scss';
import Header from './components/header/Header';
import ControlPanel from './components/ControlPanel/ControlPanel';


export default function MainApp() {
    return (
        <>
            <Header />
            <ControlPanel />
        </>    
    )
}
