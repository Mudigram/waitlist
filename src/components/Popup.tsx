'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'

export default function Popup() {
    const [activeModal, setActiveModal] = useState<null | 'waitlist' | 'faq'>(null)

    return (
        <div>
            <div className="flex gap-4 items-center justify-around space-x-6">
                {/* Button to open waitlist modal */}
                <Button
                    onClick={() => setActiveModal('waitlist')}
                    variant="default"
                    className="text-xl font-bold cursor-pointer p-6 rounded-2xl"
                >
                    Join Waitlist
                </Button>

                {/* Button to open FAQ modal */}
                <Button
                    onClick={() => setActiveModal('faq')}
                    variant="ghost"
                    className="text-xl font-bold cursor-pointer p-6 bg-gray-300 rounded-2xl"
                >
                    FAQs
                </Button>
            </div>

            {/* Render modal if active */}
            {activeModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* overlay with fade-in */}
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
                        onClick={() => setActiveModal(null)}
                    />

                    {/* modal box with scale-in */}
                    <div
                        className="bg-white rounded-2xl max-w-md w-[90%] p-6 shadow-xl relative animate-scale-in"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
                        >
                            ✖
                        </button>

                        {/* Conditional content same as before */}
                        {activeModal === 'waitlist' && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
                                <form className="flex flex-col gap-3">
                                    <input type="text" placeholder="Full Name" className="border rounded-lg px-4 py-2" />
                                    <input type="tel" placeholder="Phone Number" className="border rounded-lg px-4 py-2" />
                                    <input type="email" placeholder="Email Address" className="border rounded-lg px-4 py-2" />
                                    <Button type="submit" variant="default" className="mt-2">Join Now</Button>
                                </form>
                            </div>
                        )}

                        {activeModal === 'faq' && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
                                <details className="border rounded-lg p-3 mb-2">
                                    <summary className="cursor-pointer font-medium">What is the app about?</summary>
                                    <p className="mt-2 text-sm">It’s designed to give you early access to our upcoming features.</p>
                                </details>
                                <details className="border rounded-lg p-3 mb-2">
                                    <summary className="cursor-pointer font-medium">How do I join the waitlist?</summary>
                                    <p className="mt-2 text-sm">Click Join Waitlist and submit your details.</p>
                                </details>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}
