import React from 'react'
import Breadcumbs from '../components/Breadcumbs/Breadcumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../components/Form/ContactForm'

const Contact = () => {
    return (
      <>
        <Breadcumbs />
        <div className="container mx-auto px-4">
          <div className="bg-theme-gray p-10 my-24 rounded-lg">
            <div className="text-center max-w-[700px] m-auto">
              <h2 className='text-default-green text-2.5xl font-semibold'>Get in touch</h2>
              <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
            </div>
            <div className="map my-10 rounded-xl overflow-hidden">
              <iframe className="rounded w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="grid grid-cols-12 gap-6 sm:block">
                <div className="form-section col-span-7">
                    <ContactForm />
                </div>
                <div className="contact-details col-span-5 sm:mt-10">
                    <div className="bg-white rounded-xl p-5 mb-10">
                        <div className="mapmark flex gap-5">
                          <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' className='text-default-green'/>
                          <div className="adress">
                            <h4 className='text-2xl font-semibold mb-2'>Address</h4>
                            <span className='text-gray-500 font-sans'>123 Street New York.USA</span>
                          </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 mb-10">
                        <div className="mapmark flex gap-5">
                          <FontAwesomeIcon icon={faEnvelope} size='2x' className='text-default-green'/>
                          <div className="adress">
                            <h4 className='text-2xl font-semibold mb-2'>Mail Us</h4>
                            <span className='text-gray-500 font-sans'>info@example.com</span>
                          </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5">
                        <div className="mapmark flex gap-5">
                          <FontAwesomeIcon icon={faPhone} size='2x' className='text-default-green'/>
                          <div className="adress">
                            <h4 className='text-2xl font-semibold mb-2'>Telephone</h4>
                            <span className='text-gray-500 font-sans'>(+012) 3456 7890</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Contact