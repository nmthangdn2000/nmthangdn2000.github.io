import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";

const ContactPage: React.FC<PageProps> = () => {
    return (
        <PageBody>
            <div className="page-title">
                <h1>Contact</h1>
                <div className="page-subtitle">
                    <h4> Get in Touch</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className=" col-xs-12 col-sm-4 ">
                        <div id="info_list_1" className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="linecons linecons-phone"></i>
                                </div>
                                <div className="ci-text">
                                    <h4>(+84) 94 667 2181</h4>
                                    <p>Reach out to me during business hours.</p>
                                </div>
                            </div>

                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="linecons linecons-location"></i>
                                </div>
                                <div className="ci-text">
                                    <h4>Danang - Vietnam</h4>
                                    <p>102 Nguyen Minh Chan, Hoa Khanh Nam, Lien Chieu</p>
                                </div>
                            </div>

                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="linecons linecons-mail"></i>
                                </div>
                                <div className="ci-text">
                                    <h4>anhminh2122000@gmail.com</h4>
                                    <p>Send me an email.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" col-xs-12 col-sm-8 ">
                        <div className="block-title">
                            <h2>How Can I Help You?</h2>
                        </div>

                        <form id="contact_form" className="contact-form" action="contact_form/contact_form.php" method="post">
                            <div className="messages"></div>

                            <div className="controls two-columns">
                                <div className="fields clearfix">
                                    <div className="left-column">
                                        <div className="form-group form-group-with-icon">
                                            <input
                                                id="form_name"
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Full Name"
                                                required
                                                data-error="Name is required."
                                            />
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group form-group-with-icon">
                                            <input
                                                id="form_email"
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email Address"
                                                required
                                                data-error="Valid email is required."
                                            />
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group form-group-with-icon">
                                            <input
                                                id="form_name"
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                placeholder="Subject"
                                                required
                                                data-error="Subject is required."
                                            />
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="right-column">
                                        <div className="form-group form-group-with-icon">
                                            <textarea
                                                id="form_message"
                                                name="message"
                                                className="form-control"
                                                placeholder="Message"
                                                rows={7}
                                                required
                                                data-error="Please, leave me a message."
                                            ></textarea>
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>

                                <input type="submit" className="button btn-send disabled" value="Send message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <PageHead title="Contact" />;
