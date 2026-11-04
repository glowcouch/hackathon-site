const domain = "hackaberry.com";
const url = `https://${domain}`;
const start = new Date("2027-02-27T09:00:00+13:00");
const end = new Date("2027-02-28T09:00:00+13:00");
const hours = 12;

// event details
export const event = {
	name: "Hackaberry",
	url: url,
	uid: "hackaberry-2027@example.com",
	address: "148 Durham Street, Tauranga 3110",
	venue: "Basestation",
	start: start,
	end: end,
	hours: hours,
	description: `${hours} hours of youth hacking. More details at ${url}`,
	signUp: "https://forms.fillout.com/t/sdomEGAG6hus",
};

export const contact = {
	email: `hello@${domain}`,
	discord: `${event.name.toLowerCase()}`,
	discord_id: "TODO",
	instagram: `@${event.name.toLowerCase()}`,
};
