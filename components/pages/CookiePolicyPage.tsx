
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';

const CookiePolicyPage: React.FC = () => {
    // Content is generalized based on the user's provided reference
    return (
        <div>
            <Hero
                title="Cookie Policy"
                subtitle="This policy provides information about how and why we use cookies on this website."
            />
            <div className="py-20 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none text-charcoal-light prose-headings:text-charcoal prose-strong:text-charcoal prose-a:text-electric-blue hover:prose-a:text-charcoal">
                    
                    <p>The Akin Technology website is edited by Akin Technology. The purpose of this Notice is to inform you about the collection and use of Cookies when browsing our website. For further information about this policy, please contact us via our contact page.</p>
                    <p>We will ensure the accuracy of this Cookie Policy by keeping it up-to-date. Any changes will be promptly communicated on this page. By clicking “Accept All” on the Cookie banner, or by saving your customized preferences, you agree to the use of Cookies on your browser. You may revoke or change your consent at any time via our Cookie Settings.</p>
                    
                    <h2>What are cookies?</h2>
                    <p>A cookie is a small file which is placed on your computer's hard drive. If you choose to accept cookies, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. In general, cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
                    <p>These data do not usually identify you directly, but they can provide you with a personalized web experience.</p>
                    
                    <h2>Our website uses the following types of cookies:</h2>
                    
                    <h3>Strictly Necessary Cookies</h3>
                    <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</p>
                    
                    <h3>Performance Cookies</h3>
                    <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>

                    <h3>Functional Cookies</h3>
                    <p>These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>

                    <h3>Targeting Cookies</h3>
                    <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>

                    <h2>How you can manage cookies?</h2>
                    <p>When browsing the Website for the first time, you may click the button “Customize” on the Cookie banner in order to manage your Cookie preferences. At any time, you will be able to adjust your preferences in the Cookie Settings, which can be accessed via a link in the footer of our website.</p>

                    <p><em>Updated: August 2024</em></p>
                </div>
            </div>

            <CallToActionSection
                title="Questions About Our Policies?"
                subtitle="If you have any questions about this cookie policy or our data practices, please don't hesitate to reach out to our team."
                buttonText="Contact Us"
                buttonLink="/contact"
            />
        </div>
    );
};

export default CookiePolicyPage;
