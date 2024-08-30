'use client';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const text = 'Say Hello';

	const form = useRef();
	const formMessage = useRef();
	useEffect(() => {
		formMessage.current.focus();
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY,
			)
			.then(
				() => {
					setSuccess(true);
					form.current.reset();
				},
				() => {
					setError(true);
				},
			);
	};

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12  lg:px-20'>
				{/* TEXT CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
					<div>
						{text.split('').map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}
							>
								{letter}
							</motion.span>
						))}
						😊
					</div>
				</div>
				{/* FORM CONTAINER */}
				<form
					onSubmit={sendEmail}
					ref={form}
					className=' lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-14'
				>
					<label htmlFor='message'>Dear Mel Turham,</label>
					<textarea
						ref={formMessage}
						className='outline-none  resize-none bg-blue-50 p-2 rounded focus:border border-1 border-solid border-blue-200'
						name='user_message'
						id='message'
						rows={2}
					/>
					<label htmlFor='user_email'>My mail address is:</label>
					<input
						name='user_email'
						type='email'
						id='user_email'
						className=' bg-blue-50 p-2 rounded focus:border border-1 border-solid border-blue-200  outline-none'
					/>
					<span>Regards</span>
					<button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>
						Send
					</button>
					{success && (
						<span className='text-green-600 font-semibold'>
							Your message has been sent successfully!
						</span>
					)}
					{error && (
						<span className='text-red-600 font-semibold'>
							Something went wrong!
						</span>
					)}
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
