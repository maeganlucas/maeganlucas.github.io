import { useState } from 'react';
import { useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';

function ContactForm () {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [disabled, setDisabled] = useState(false);

    const onSubmit = async(data) => {
        const { name, email, subject, message } = data;

        try 
        {
            // Disable form while submitting
            setDisabled(true);

            // Define template params
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            // Send email
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            );

            alert("Your message was sent, thanks for reaching out! I'll get back to you soon!");
        } catch (e)
        {
            console.error(e);
            alert("Uh oh! Something went wrong trying to submit your form. Please try again.");
        }
        finally
        {
            // Re-enable form submission
            setDisabled(false);
            // Reset contact form
            reset();
        }
    }

    return (
        <div className='contact-section'>
            <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}>
                <div className='entry-column'>
                    <p>* Required fields</p>
                    <div>
                        <p>Name*</p>
                        <input
                            type='text'
                            name='name'
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Please enter your name.',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Oops your name is too long! Try a nickname.'
                                },
                            })}
                            placeholder='Name'/>
                            {errors.name && (
                                <span className='error-message'>
                                    {errors.name.message}
                                </span>
                            )}
                    </div>
                    <div>
                        <p>Email*</p>
                        <input
                            type='email'
                            name='email'
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Please enter you email address.'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Please enter a valid email address.'
                                },
                            })}
                            placeholder="Email" />
                        {errors.email && (
                            <span className='error-message'>
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <p>Subject*</p>
                        <input
                            type='text'
                            name='subject'
                            {...register('subject', {
                                required: {
                                    value: true,
                                    message: 'Please enter a subject line for your message.'
                                },
                                maxLength: {
                                    value: 100,
                                    message: 'Please limit your subject line to 100 characters.'
                                }
                            })}
                            placeholder="Subject" />
                        {errors.subject && (
                            <span className='error-message'>
                                {errors.subject.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <p>Message*</p>
                        <textarea
                            rows={6}
                            name='message'
                            {...register('message', {
                                required: {
                                    value: true,
                                    message: 'Please enter a message.'
                                }
                            })}
                            placeholder='Enter your message here.' />
                        {errors.message && (
                            <span className='error-message'>
                                {errors.message.message}
                            </span>
                        )}
                    </div>
                    <button
                        className='submit-button'
                        type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;