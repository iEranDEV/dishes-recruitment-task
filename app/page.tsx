'use client';

import { useState } from "react";
import Form from "./components/Form";
import { INotification } from "@/types";
import NotificationElement from "./components/notification/NotificationElement";
import { AnimatePresence } from "framer-motion";

export default function FormPage() {
	// List of notifications for render
	const [nofitications, setNotifications] = useState(Array<INotification>());

	// Add new notification
	const addNotification = (data: INotification) => {
		setNotifications((prev) => [...prev, data]);
	}

	// Remove notification with specific name
	const removeNotification = (name: string) => {
		setNotifications((prev) => prev.filter((data) => data.name !== name));
	}

	return (
		<div className="min-h-screen py-20 w-full flex justify-center">

			{/* Form */}
			<Form addNotification={addNotification} />

			{/* Notifications */}
			<div className="fixed top-0 right-0 flex flex-col gap-2 p-2">
				<AnimatePresence>
					{nofitications.map((data) => <NotificationElement key={data.name} data={data} removeNotification={removeNotification} />)}
				</AnimatePresence>
			</div>
		</div>
	)
}
