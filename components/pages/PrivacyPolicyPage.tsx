
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div>
            <Hero
                title="Privacy Policy"
                subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your personal data."
            />

            <div className="py-20 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none text-charcoal-light prose-headings:text-charcoal prose-strong:text-charcoal prose-a:text-electric-blue hover:prose-a:text-charcoal">
                    
                    <p>Akin Technology (“we,” “us,” or “our”) offers digital business transformation services. This Privacy Policy sets out how we collect, use, share, and protect any information we collect through this website and our sub-sites (collectively, the “Website”) as well as in the context of external marketing events. This Privacy Policy also explains the measures we take to safeguard your information and describes how you may contact us regarding our privacy practices.</p>
                    <p>Please note, this Privacy Policy does not apply to the services provided by us on behalf of clients or to data that the Agency processes on behalf of our clients.</p>

                    <h2>Introduction</h2>
                    <p>Any data collected through the Website or external marketing events held by Akin Technology or its partners, including personal data as defined under applicable data protection laws (collectively, “Personal Data”), will only be used for the purposes set out in this Privacy Policy. Notwithstanding, we may use information that does not identify you (including information that has been aggregated or de-identified) for any purpose except as prohibited by applicable law.</p>
                    <p>Akin Pte Ltd, Singapore, is considered the independent Controller of the data collected through this Website.</p>
                    <p>Please read this Privacy Policy thoroughly. If you disagree with the way Personal Data will be used, please do not use this Website or provide your Personal Data through the Website.</p>
                    <p>We may include links to other websites, including social media platforms. This Privacy Policy only covers this Website or external marketing events held by Akin Technology or its partners and does not apply to the data practices of other websites. We encourage you to read the privacy notices available on websites you visit.</p>
                    <p>This Privacy Policy does not cover employee data or data collected during the application process. If you are an applicant, please contact us for our Recruitment Privacy Notice.</p>
                    
                    <h3>I. What Personal Data do we collect and process?</h3>
                    <p>The following table describes the categories of Personal Data we collect.</p>
                    <ul>
                        <li><strong>Contact Information and Identifiers:</strong> First name, last name, e-mail address, telephone number, job title, employer's name, country, online identifiers; IP address; mobile ad identifiers, third party cookies.</li>
                        <li><strong>Internet or other electronic network activity information (Technical Data):</strong> Operating system, browser type, browsing history; search history; and information on a consumer's interaction with a website, application, or advertisement.</li>
                        <li><strong>General Geolocation Data:</strong> Non-precise location information from your device or IP address.</li>
                        <li><strong>Information you communicate to us:</strong> Information that you directly send us through our contact forms or other communication channels.</li>
                    </ul>
                    
                    <h3>II. Who do we collect Personal Data from?</h3>
                    <ul>
                        <li><strong>Information you provide directly.</strong> For example, when you use the query form to inquire about our services, download a white paper, or register for an event.</li>
                        <li><strong>Information obtained from third parties.</strong> Information about you that may come from data brokers, partners, data analytics providers, and social networks.</li>
                        <li><strong>Information collected when you engage the Website.</strong> Information collected from you using automated technologies, such as cookies, pixels, and log files.</li>
                        <li><strong>Information we do not seek.</strong> We do not intend to collect “special” or “sensitive” information from or about you. We ask that you do not provide such information.</li>
                    </ul>

                    <h3>III. Purpose of Data Collection and Legal Basis</h3>
                    <p>We process your Personal Data for various purposes, including:</p>
                    <ul>
                        <li>To read and respond to your inquiries.</li>
                        <li>To contact you where you have indicated you wish to be contacted.</li>
                        <li>Operating, analysing, improving, and securing our Website.</li>
                        <li>Marketing services that may include targeting and optimizing campaigns.</li>
                        <li>Other internal purposes, such as website maintenance, quality control, and legal compliance.</li>
                        <li>For legal purposes, such as to comply with legal processes or enforce our terms.</li>
                    </ul>

                    <h3>IV. With Whom do we Share Personal Data?</h3>
                    <p>We may disclose your Personal Data collected and processed through this Website for various purposes related to our business. The disclosure may be to our affiliates, service providers, advertising partners, and analytics partners.</p>
                    
                    <h3>V. How Long We Keep Your Information</h3>
                    <p>We keep Personal Data for as long as is necessary for the purposes described in this Privacy Policy, complying with legal and regulatory obligations, protecting our or other’s interests, and as otherwise permitted or required by law.</p>

                    <h3>VI. Your Rights and choices regarding Personal Data</h3>
                    <p>You may have various rights regarding your data depending on your jurisdiction, such as the right to access, rectify, or erase your personal data, and the right to object to or restrict processing. To exercise these rights, please contact us via our contact page or the email provided at the end of this policy.</p>
                    
                    <h3>VII. Data Security</h3>
                    <p>We use a variety of methods, such as firewalls, intrusion detection software and manual security procedures for the purpose of securing your data against loss or damage, protecting the accuracy and security of Personal Data, and preventing unauthorized access or improper use.</p>

                    <h3>VIII. Data Transfers</h3>
                    <p>Due to the international nature of our business, your Personal Data may be transferred outside of your country of residence. We ensure all data transfers comply with applicable legal requirements by executing appropriate legal mechanisms such as standard contractual clauses.</p>
                    
                    <h3>IX. Use of cookies, other tracking technology, and social media</h3>
                    <p>We use cookies and similar technologies to optimize the viewing experience, analyze traffic, and better serve content. You can manage your preferences through our cookie consent banner. For more details, please review our <Link to="/cookie-policy">Cookie Policy</Link>.</p>

                    <h3>X. Notification of changes</h3>
                    <p>Any changes to this Privacy Policy will be promptly communicated on this page and you should check back to see whether there are any changes. Continued use of the Website after a change in the Privacy Policy indicates your acknowledgement and acceptance of the use of Personal Data in accordance with the amended Privacy Policy.</p>

                    <h3>XI. Further Information</h3>
                    <p>If you consider that we are not complying with this Privacy Policy, if you have any questions in relation to this Privacy Policy, or have questions about your rights and choices, please contact our Privacy Officer at <a href="mailto:privacy@akintechnology.com">privacy@akintechnology.com</a>.</p>
                    <p><em>Updated: August 2024</em></p>

                </div>
            </div>

            <CallToActionSection
                title="Questions About Your Data?"
                subtitle="If you have any questions about this privacy policy or our data practices, please don't hesitate to reach out to our team."
                buttonText="Contact Our Privacy Officer"
                buttonLink="mailto:privacy@akintechnology.com"
            />
        </div>
    );
};

export default PrivacyPolicyPage;
