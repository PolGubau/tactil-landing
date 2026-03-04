import { actions } from "astro:actions";
import { useState } from "react";

type ContactFormProps = {
	translations: {
		name_label: string;
		name_placeholder: string;
		email_label: string;
		email_placeholder: string;
		phone_label: string;
		phone_placeholder: string;
		service_label: string;
		service_placeholder: string;
		service_web: string;
		service_landing: string;
		service_ecommerce: string;
		service_app: string;
		service_other: string;
		message_label: string;
		message_placeholder: string;
		submit: string;
		sending: string;
		success: string;
		error: string;
	};
};

export default function ContactForm({ translations }: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
		"idle",
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");

		try {
			const { data, error } = await actions.sendContactEmail(formData);

			if (!error) {
				setStatus("success");
				setFormData({
					name: "",
					email: "",
					phone: "",
					service: "",
					message: "",
				});
				setTimeout(() => setStatus("idle"), 5000);
			} else {
				console.error("Action error:", error);
				setStatus("error");
				setTimeout(() => setStatus("idle"), 5000);
			}
		} catch (error) {
			console.error("Error:", error);
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
			{/* Name */}
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="font-semibold text-sm text-foreground">
					{translations.name_label} <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder={translations.name_placeholder}
					required
					className="px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
				/>
			</div>

			{/* Email */}
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="font-semibold text-sm text-foreground">
					{translations.email_label} <span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder={translations.email_placeholder}
					required
					className="px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
				/>
			</div>

			{/* Phone */}
			<div className="flex flex-col gap-2">
				<label htmlFor="phone" className="font-semibold text-sm text-foreground">
					{translations.phone_label}
				</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder={translations.phone_placeholder}
					className="px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
				/>
			</div>

			{/* Service */}
			<div className="flex flex-col gap-2">
				<label htmlFor="service" className="font-semibold text-sm text-foreground">
					{translations.service_label}
				</label>
				<select
					id="service"
					name="service"
					value={formData.service}
					onChange={handleChange}
					className="px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer"
				>
					<option value="">{translations.service_placeholder}</option>
					<option value={translations.service_web}>
						{translations.service_web}
					</option>
					<option value={translations.service_landing}>
						{translations.service_landing}
					</option>
					<option value={translations.service_ecommerce}>
						{translations.service_ecommerce}
					</option>
					<option value={translations.service_app}>
						{translations.service_app}
					</option>
					<option value={translations.service_other}>
						{translations.service_other}
					</option>
				</select>
			</div>

			{/* Message */}
			<div className="flex flex-col gap-2">
				<label htmlFor="message" className="font-semibold text-sm text-foreground">
					{translations.message_label} <span className="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder={translations.message_placeholder}
					required
					rows={6}
					className="px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
				/>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={status === "sending"}
				className="w-full bg-primary text-background font-semibold py-3.5 px-6 rounded-lg hover:brightness-95 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
			>
				{status === "sending" ? (
					<span className="flex items-center justify-center gap-2">
						<svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						{translations.sending}
					</span>
				) : (
					translations.submit
				)}
			</button>

			{/* Status Messages */}
			{status === "success" && (
				<div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg text-center font-medium">
					✓ {translations.success}
				</div>
			)}

			{status === "error" && (
				<div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg text-center font-medium">
					✕ {translations.error}
				</div>
			)}
		</form>
	);
}

