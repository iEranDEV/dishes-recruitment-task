'use client';

import { DishForm, FormStatus } from "@/types";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Form from "./components/Form";
import Button from "./components/Button";

const API_URL = 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/';

export default function FormPage() {
	const [apiStatus, setApiStatus] = useState<{status: FormStatus, error?: string, data?: DishForm}>({status: FormStatus.FORM});

	// On submit handler
	const onSubmit: SubmitHandler<DishForm> = async (data: DishForm) => {
		setApiStatus(() => ({status: FormStatus.PENDING}));
		await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res) => res.json()).then((res) => {
			setApiStatus(() => ({
				status: FormStatus.OK,
				data: res
			}));
			console.log(res);
		}).catch((error) => {
			setApiStatus(() => ({
				status: FormStatus.ERROR,
				error: error.message
			}));
		})
	}

	const getCurrentView = () => {
		switch(apiStatus.status) {
			case FormStatus.FORM:
				return <Form onSubmit={onSubmit} />
			case FormStatus.OK:
				if(apiStatus.data) {
					return (
						<div className="h-fill w-80 flex justify-center items-center">
							<div className="w-full flex flex-col gap-2">
								<h1 className="text-3xl font-bold text-gray-800">Dish Added</h1>
								<span className="text-sm text-gray-400">
									You successfully added new dish!
								</span>
								<hr />

								<div className="flex flex-col gap-1 py-2">
									{Object.keys(apiStatus.data).map((val) => {
										return (
											<div key={val} className="flex justify-between items-center">
												<span className="font-semibold">{val}</span>
												<span>{apiStatus.data && apiStatus.data[val]}</span>
											</div>
										)
									})}
								</div>
	
								<hr />
								<div className="flex justify-end">
									<div onClick={() => setApiStatus({status: FormStatus.FORM})}>
										<Button text="Back to form" color={"bg-emerald-500"}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
												<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
											</svg>
										</Button>
									</div>
								</div>
							</div>
						</div>
					)
				}
			case FormStatus.ERROR:
				return (
					<div className="h-fill w-80 flex flexco justify-center items-center">
						<div className="w-full flex flex-col gap-2">
							<h1 className="text-3xl font-bold text-gray-800">An error occured</h1>
							<span> {apiStatus.error}</span>
							<hr />
							<div className="flex justify-end">
								<div onClick={() => setApiStatus({status: FormStatus.FORM})}>
									<Button text="Back to form" color={"bg-emerald-500"}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
										</svg>
									</Button>
								</div>
							</div>
						</div>
					</div>
				)
			case FormStatus.PENDING:
				return (
					<div className="h-fill w-full flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin text-gray-400">
							<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
						</svg>
					</div>
				)
		}
	}

	return (
		<div className="min-h-screen py-20 w-full flex justify-center">
			{getCurrentView()}
		</div>
	)
}
