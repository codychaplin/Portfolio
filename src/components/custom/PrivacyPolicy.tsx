function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-blue-100">Privacy Policy</h1>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg mb-6 text-gray-600 dark:text-blue-200">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Introduction</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Welcome to my portfolio website. This Privacy Policy explains how I collect, use, and protect your information when you visit my website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Information We Collect</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            This website is a static portfolio site and does not collect personal information directly. However, some information may be collected automatically:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-blue-200 mb-4">
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>IP address (anonymized)</li>
                            <li>Pages visited and time spent on site</li>
                            <li>Referring website</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">How We Use Your Information</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            Any information collected is used solely for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-blue-200 mb-4">
                            <li>Improving website performance and user experience</li>
                            <li>Understanding visitor traffic patterns</li>
                            <li>Debugging technical issues</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Cookies and Local Storage</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            This website uses local storage to remember your theme preference (light/dark mode). This information is stored locally on your device and is not transmitted to any servers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Third-Party Services</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            This website is hosted on GitHub Pages. Please refer to GitHub's Privacy Policy for information about their data practices.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Data Security</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            While this website does not collect sensitive personal information, I take reasonable measures to protect any information that may be collected through standard web analytics.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Contact Information</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            If you have any questions about this Privacy Policy, please contact me at:
                        </p>
                        <p className="text-gray-700 dark:text-blue-200">
                            Email: <a href="mailto:chaplinbcody@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">chaplinbcody@gmail.com</a>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-blue-100">Changes to This Policy</h2>
                        <p className="text-gray-700 dark:text-blue-200 mb-4">
                            I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
                        </p>
                    </section>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <a 
                        href="/" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Back to Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
