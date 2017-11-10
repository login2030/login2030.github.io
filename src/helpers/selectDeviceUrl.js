export default function({desktop, tablet, mobile}) {
	if (device.desktop()) {
		return desktop;
	}
	if (device.tablet()) {
		return tablet;
	}
	if (device.mobile()) {
		return mobile;
	}
	return false;
};