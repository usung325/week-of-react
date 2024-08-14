import React from 'react'
import Card from '../../components/Card'

export default function RoutingFaqPage() {
    const contactInfo = {
        link: 'cat5.webp',
        title: 'Question 1:',
        textContent: 'Where is the best stores for free pets?',
        textSecondary: 'Insadong streets have a pretty good range of cat lovers!'
    }
    return (
        <>
            <Card {...contactInfo} />
        </>
    )
}