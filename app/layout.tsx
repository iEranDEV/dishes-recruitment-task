import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Dish creator',
	description: 'Recruitment task for HexOcean',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/sandwich.svg" sizes="any" />
			</head>
			<body className={inter.className}>
				<main className="h-full w-full flex justify-between items-center">
					{/* Main section */}
					{children}
				</main>
			</body>
		</html>
	)
}
