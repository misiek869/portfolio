import type { Metadata } from 'next'
import localFont from '@next/font/local'
import './globals.css'

const poppins = localFont({
	src: [
		{
			path: '../../public/fonts/Moderustic-Bold.ttf',
			weight: '400',
		},
		{
			path: '../../public/fonts/Moderustic-Medium.ttf',
			weight: '300',
		},
		{
			path: '../../public/fonts/Moderustic-Light.ttf',
			weight: '200',
		},
	],
	variable: '--font-Moderustic-Regular',
})

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>{children}</body>
		</html>
	)
}
