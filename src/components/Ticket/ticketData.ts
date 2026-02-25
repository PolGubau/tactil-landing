import type { TranslationKey } from "~/shared/i18n/types";

export type TicketItem = {
	name: TranslationKey;
	price: string | number;
};

type Ticket = TicketItem[];

export const ticketData: Ticket = [
	{
		name: "overpriced_wordpress_theme",
		price: 199,
	},
	{
		name: "template_that_doesnt_fit_your_brand",
		price: 159,
	},
	{
		name: "seo_plugins_that_dont_work",
		price: 69,
	},
	{
		name: "opaque_hosting_provider",
		price: 79,
	},
	{
		name: "plugin_to_make_it_work",
		price: 39,
	},
	{
		name: "freelancer_to_fix_everything",
		price: 1599,
	},
	{
		name: "other_plugin_to_fix_it_again",
		price: 39,
	},
	{
		name: "unclear_maintenance_costs",
		price: "49€/month",
	},
	{
		name: "time_lost",
		price: "&infin;",
	},
];
