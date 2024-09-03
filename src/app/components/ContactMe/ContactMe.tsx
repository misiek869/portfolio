'use client'
import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'
import { AiFillMail, AiOutlineFieldTime } from 'react-icons/ai'
import { FaHeadphones } from 'react-icons/fa'

import { ToastClassName, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactMe = () => {
	type FormState = {
		name: string
		email: string
		phoneNumber: string
		subject: string
		message: string
	}

	const [state, setState] = useState<FormState>({
		name: '',
		email: '',
		phoneNumber: '',
		subject: '',
		message: '',
	})

	const [loading, setLoading] = useState<boolean>(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target

		setState({
			...state,
			[name]: value,
		})
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const numericValue = value.replace(/[^0-9]/g, '')
		setState({ ...state, phoneNumber: numericValue })
	}

	const clearState = () => {
		setState({
			name: '',
			email: '',
			phoneNumber: '',
			subject: '',
			message: '',
		})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)

		const data: FormState = {
			...state,
		}

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			const response = await res.json()
			setLoading(false)
			if (!response.error) {
				clearState()
				toast(response.message)
			} else {
				clearState()
				toast('something went wrong')
			}
		} catch (error) {
			setLoading(false)
			clearState()
			toast('something went wrong')
		}
	}

	return (
		<>
			<ToastContainer />
			<div
				className='flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4'
				id='contactme'>
				<div className='flex flex-col items-center justify-center bg-[url("/contact.jpg")] bg-cover bg-center w-full h-[500px]'>
					<div className='flex flex-col items-center justify-center  w-full h-full bg-[#223740]/70 backdrop-brightness-50'>
						{/* <div className='text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg'>
							<a href='#contact' className='cursor-pointer'>
								Contact Form
							</a>
						</div> */}
						<div className='mt-[10px]'>
							<h1 className='text-5xl text-orange p-2 mb-5 text-center tracking-wide'>
								Contact Me
							</h1>
						</div>
						<div className='flex justify-center text-center mt-[10px] md:w-[700px] '>
							<p className='text-white font-[300] text-cener text-xl'>
								If You are you looking for a responsible, professional front-end
								developer? Just leave me a message.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				id='contact'
				className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10 mb-[-100px]'>
				<div className='flex flex-col gap-[20px]'>
					<div className='mb-4'>
						<p className='text-3xl'>
							Have a question or want to work together? Send me a message using
							the form.
						</p>
					</div>
					<form className='flex flex-col gap-[20px]' onSubmit={handleSubmit}>
						<div className='flex flex-col sm:flex-row gap-[20px]'>
							<input
								type='text'
								name='name'
								placeholder='Your Name...'
								required
								onChange={handleChange}
								value={state.name}
								className='px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
							/>
							<input
								type='email'
								name='email'
								placeholder='Your Email...'
								required
								onChange={handleChange}
								value={state.email}
								className='px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
							/>
						</div>
						<div className='flex flex-col sm:flex-row gap-[20px]'>
							<input
								type='text'
								name='phoneNumber'
								placeholder='Your Number...'
								required
								onChange={handlePhoneChange}
								value={state.phoneNumber}
								className='px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
							/>
							<input
								type='text'
								name='subject'
								placeholder='Your Subject...'
								required
								onChange={handleChange}
								value={state.subject}
								className='px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
							/>
						</div>
						<div>
							<textarea
								required
								name='message'
								placeholder='Your Message...'
								onChange={handleChange}
								value={state.message}
								className='w-full px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
							/>
						</div>
						<div className='mx-auto'>
							{loading && (
								<div className='mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full'></div>
							)}
							<button className='bg-orange w-full sm:w-auto px-[30px] py-[12px] hover:bg-gray transition-colors duration-300 font-semibold rounded-md text-white tracking-widest'>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className='px-[20px]'>
					<div className='sm:flex flex-col gap-[20px] mt-[50px] w-full h-full'>
						<div className='flex flex-col flex-1 xl:flex-row gap-[20px]'>
							<div
								className='flex justify-center flex-col py-[35px] px-[45px] rounded-md shadow-lg bg-blue'
								style={{ boxShadow: 'hsl(var(--blue)) -1px 1px 10px 0px' }}>
								<div className='flex flex-col items-center gap-[15px]'>
									<div>
										<FiPhoneCall size={50} color='hsl(var(--orange))' />
									</div>

									<div className='flex flex-col'>
										<div className='font-semibold text-[20px] tracking-wide'>
											<p className='text-white tracking-wider'>Call Me</p>
										</div>
									</div>
									<div>
										<p className='text-gray'>Mob: +48 512-374-866</p>
									</div>
								</div>
							</div>
						</div>

						<div className='flex flex-col flex-1 xl:flex-row gap-[20px] mt-2'>
							<div
								className='flex justify-center  flex-col py-[35px] px-[45px] rounded-md shadow-lg bg-blue'
								style={{ boxShadow: 'hsl(var(--blue)) -1px 1px 10px 0px' }}>
								<div className='flex flex-col items-center gap-[15px]'>
									<div>
										<AiFillMail size={50} color='hsl(var(--orange))' />
									</div>

									<div className='flex flex-col'>
										<div className='font-semibold text-[20px] tracking-wide'>
											<p className='text-white tracking-wider'>Email</p>
										</div>
									</div>
									<div>
										<p className='text-gray'>gawlik.zator@gmail.com</p>
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

export default ContactMe
