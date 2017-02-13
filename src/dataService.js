const appId = '3c847946';
const options = { headers: {"Content-Type": "application/json"} };

export const getCharityData = (charityId) => {
	return fetch(`https://api.justgiving.com/${appId}/v1/charity/${charityId}`, options)
	.then((res) => res.json());
}

export const getDonationData = (charityId) => {
	return fetch(`https://api.justgiving.com/${appId}/v1/charity/${charityId}/donations`, options)
	.then((res) => res.json());
}