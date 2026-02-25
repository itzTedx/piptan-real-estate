export const revalidate = 3600;

export async function GET() {
	const body = [
		"site_name: Piptan Investment",
		"domain: https://www.piptan.ae",
		"industry: real_estate_investment",
		"region: United Arab Emirates (UAE)",
		"cities: Dubai, Abu Dhabi",
		"",
		"company_description: Piptan is a UAE-based real estate investment firm focused on premium residential and mixed-use developments in Dubai and Abu Dhabi, with a strong partnership network including leading developers such as Emaar.",
		"",
		"services: investment_advisory, project_selection, portfolio_strategy, transaction_support, developer_partnerships",
		"",
		"key_pages:",
		"- /",
		"- /portfolio",
		"- /insights",
		"- /services",
		"- /about",
		"- /contact",
		"",
		"contact:",
		"- primary_channel: website_contact_form",
		"- location: Dubai, United Arab Emirates",
	].join("\n");

	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
}

