import React from 'react'
import Card from '../../components/Card'

export default function RoutingContactsPage() {
    const contactInfo = {
        link: 'cat5.webp',
        title: 'Cat Representative',
        textContent: 'Hello! This is the contact information. Please contact us at cats@meow.com'
    }
    return (
        <>
            <Card {...contactInfo} />
        </>
    )
}