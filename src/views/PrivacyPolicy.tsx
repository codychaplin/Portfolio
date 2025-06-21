function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-blue-100">Privacy Policy</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg mb-6 text-gray-600 dark:text-blue-200">Last updated: 2025-06-21</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Introduction</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            This Privacy Policy explains how Pherda Studios ("we," "our," or "us") collects, uses, and protects your information when you use our services. Our
                            application is available to users worldwide and incorporates various third-party services to enhance your experience.
                        </p>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            <strong>Important:</strong> We do not sell, share, or use your personal data for any purpose other than those explicitly outlined in this policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Information We Collect</h2>

                        <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-blue-200">Information You Provide:</h3>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-blue-200 mb-4">
                            <li>Audio recordings when you use voice input features (processed by OpenAI)</li>
                        </ul>

                        <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-blue-200">Automatically Collected Information:</h3>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-blue-200 mb-4">
                            <li>App usage data and performance metrics (via Firebase Analytics)</li>
                            <li>Crash reports and debugging information (via Firebase Crashlytics)</li>
                            <li>Device information, browser type, and operating system</li>
                            <li>General location data</li>
                            <li>Ad interaction data (via Google AdSense)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Third-Party Services</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">Our application integrates with the following third-party services:</p>

                        <div className="mb-4">
                            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-blue-200">OpenAI (Whisper & GPT Models)</h3>
                            <p className="text-gray-700 dark:text-blue-200 mb-2">
                                We use OpenAI's Whisper for speech-to-text conversion and GPT models for intelligent field population. Audio and text data sent to OpenAI is
                                processed according to their privacy policy and data usage policies.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-blue-200">Google Services</h3>
                            <ul className="list-disc pl-6 text-gray-700 dark:text-blue-200 mb-2">
                                <li>
                                    <strong>Google AdSense:</strong> Displays personalized advertisements based on your interests and browsing behavior
                                </li>
                                <li>
                                    <strong>Firebase Analytics:</strong> Tracks app usage patterns and user engagement metrics
                                </li>
                                <li>
                                    <strong>Firebase Crashlytics:</strong> Collects crash reports and performance data to improve app stability
                                </li>
                            </ul>
                        </div>

                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Each of these services has their own privacy policies governing how they handle your data. We encourage you to review their policies for complete
                            information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">How We Use Your Information</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">We use the collected information solely for:</p>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-blue-200 mb-4">
                            <li>Providing AI-powered features and field population services</li>
                            <li>Improving app performance, stability, and user experience</li>
                            <li>Understanding usage patterns to guide feature development</li>
                            <li>Debugging technical issues and preventing crashes</li>
                            <li>Displaying relevant advertisements through Google AdSense</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Data Retention and Storage</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Audio recordings processed by OpenAI Whisper are deleted immediately after processing and are handled according to OpenAI's data retention policies.
                        </p>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Analytics and crash data is retained according to Firebase's standard retention periods. You can request deletion of your data at any time by contacting
                            us.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Your Rights and Choices</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">Depending on your location, you may have the right to:</p>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-blue-200 mb-4">
                            <li>Access, update, or delete your personal information</li>
                            <li>Opt out of data collection for analytics purposes</li>
                            <li>Disable personalized advertising</li>
                            <li>Request a copy of your data</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">To exercise these rights, please contact us using the information provided below.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">International Users</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Our services are available to users worldwide. By using our application, you acknowledge that your data may be transferred to and processed in Canada,
                            the United States (through our third-party services), and other countries where our service providers operate.
                        </p>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Data Security</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure,
                            or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Children's Privacy</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Our service is not intended for anyone under 18 years of age. We do not knowingly collect personal information from children under 18.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Contact Information</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            If you have any questions about this Privacy Policy, want to exercise your rights, or need to report a privacy concern, please contact us:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-700 dark:text-blue-200 mb-2">
                                <strong>Pherda Studios</strong>
                                <br />
                                Ontario, Canada
                            </p>
                            <p className="text-gray-700 dark:text-blue-200">
                                Email:{" "}
                                <a href="mailto:pherdastudios@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    pherdastudios@gmail.com
                                </a>
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will
                            notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Your continued use of our services after such modifications constitutes your acknowledgment of the modified Privacy Policy.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
