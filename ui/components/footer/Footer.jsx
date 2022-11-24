// @ts-nocheck
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import AOS from 'aos';
import { Share } from '../logos/index';
import 'aos/dist/aos.css';
import {
  FacebookShareButton,
  WhatsappShareButton,

  FacebookIcon,
  WhatsappIcon,

} from 'react-share';
const navigation = {
  solutions: [
    { name: 'Volutary', href: 'voluntary' },
    { name: 'Health Centers', href: 'health' },

  ],
  support: [
    { name: 'Doctrine', href: 'doctrine' },
    { name: 'Sabbath School', href: '#' },
    { name: 'Books', href: '#' },

  ],
  company: [
    { name: 'News', href: 'news' },
    { name: 'testimonial', href: 'testimonials' },
    { name: 'About', href: 'about' },
  ],
  address: [
    { name: 'News', href: 'news' },
    { name: 'testimonial', href: 'testimonials' },
    { name: 'Contact', href: 'contact-form' },
  ],
  legal: [
    { name: 'Privacy', href: 'privacy' },
    { name: 'Terms', href: 'cookie' },
  ],

  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Imsghmmdept/',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },

    {
      name: 'Dribbble',
      href: '#',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  const shareUrl = 'https://ims-ghanafield.meteorapp.com/';
  const [notifyEmail, setNotifyEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // eslint-disable-next-line no-shadow
  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  // eslint-disable-next-line no-shadow
  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const saveNotifyEmail = () => {
    Meteor.call(
      'notifyEmails.insert',
      { notifyemail },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setNotifyEmail('');

          showSuccess({ message: 'Email saved.' });
        }
      },
    );
  };
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
  });
  return (

    <footer className="bg-primary dark:bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:py-16 lg:px-6">
        <div className="pb-8 grid lg:grid-cols-6 xl:gap-6">
          <div className="grid grid-cols-2 gap-6 lg:col-span-6">
            <div className="md:grid md:grid-cols-2 lg:gap-6">
              <div>
                <h3 className="text-tertiaryOne font-medium">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-tertiaryOne font-medium">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-tertiaryOne font-medium">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-tertiaryOne font-medium">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white transition-transform hover:scale-125">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="notifyEmail"
              autoComplete="email"
              required
              value={notifyEmail}
              onChange={e => setNotifyEmail(e.target.value)}
              className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white dark:bg-slate-700 dark:text-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                onClick={saveNotifyEmail}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-tertiaryOne py-2 px-4 text-base font-medium text-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-tertiaryOne focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>

    <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">

        <div className="ml-4">
          <Share />
        </div>

        <div className="ml-4">
<WhatsappShareButton url={shareUrl}>
  <WhatsappIcon className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:text-tertiaryOne" />
</WhatsappShareButton>
</div>
<div className="ml-4">

<FacebookShareButton url={shareUrl}>
  <FacebookIcon className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:text-tertiaryOne" />
</FacebookShareButton>
</div>
        </div>
        <p className="mt-8 text-base text-tertiaryOne md:order-1 md:mt-0">
        #9 Southwest Mccarthy Hill Accra
        Post Box OD 1088 Odorkor - Accra
        </p>
      </div>
      <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">

      &copy; 2022 Ims Ghana Field. All rights reserved.
        </p>
</div>

</footer>
  );
};
