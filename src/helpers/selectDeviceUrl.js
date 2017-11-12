export default function({desktopUrl, tabletUrl, mobileUrl}) {
	if (device.desktop()) {
		return desktopUrl;
	}
	if (device.tablet()) {
		return tabletUrl;
	}
	if (device.mobile()) {
		return mobileUrl;
	}
	return false;
};