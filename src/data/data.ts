const url = "https://coolhacks.com";
const start = new Date("2027-02-27T09:00:00+13:00");
const end = new Date("2027-02-28T09:00:00+13:00");
const hours = 12;

// event details
export const event = {
	name: "CoolHacks",
	url: url,
	uid: "tauranga-hackathon-2027@example.com",
	address: "148 Durham Street, Tauranga 3110",
	start: start,
	end: end,
	hours: hours,
	description: `${hours} hours of hacking. More details at ${url}`,
};
