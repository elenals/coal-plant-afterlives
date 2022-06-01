import Tooltip from "./Tooltip.svelte";

export function tooltip(element) {
	let content;
	let tooltipComponent;
	function mouseOver(event) {
		// NOTE: remove the `content` attribute, to prevent showing the default browser tooltip
		// remember to set it back on `mouseleave`
		content = element.getAttribute("content");
		element.removeAttribute("content");

		tooltipComponent = new Tooltip({
			props: {
				content: content,
				x: event.pageX,
				y: event.pageY,
			},
			target: document.body,
		});
	}
	function mouseMove(event) {
		tooltipComponent.$set({
			x: event.pageX,
			y: event.pageY,
		});
	}
	function mouseLeave() {
		tooltipComponent.$destroy();
		// NOTE: restore the `content` attribute
		element.setAttribute("content", content);
	}

	element.addEventListener("mouseover", mouseOver);
	element.addEventListener("mouseleave", mouseLeave);
	element.addEventListener("mousemove", mouseMove);

	return {
		destroy() {
			element.removeEventListener("mouseover", mouseOver);
			element.removeEventListener("mouseleave", mouseLeave);
			element.removeEventListener("mousemove", mouseMove);
		},
	};
}
