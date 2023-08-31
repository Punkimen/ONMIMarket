export const scalingPositive = async (selector) => {
	await gsap.to(selector,{
		scale: 1.3,
		duration: 0.1,
	});
	await gsap.to(selector,{
		scale: 1,
		duration: 0.2,
	});
};


export const lineShow = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		y: '150%'
	},{
		y: '0',
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})
}

export const opacityIn = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		opacity: 0,
	},{
		opacity: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})
}
export const transformTop = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		y: '100%'
	},{
		y: 0,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})

}
export const fadeDown = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		opacity: 0,
		y: '100%'
	},{
		y: 0,
		opacity: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})

}
export const fadeIn = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1
	gsap.fromTo(el,{
		opacity: 0,
		z: '-80%'
	},{
		z: 0,
		opacity: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})

}
export const flipAnim = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 0.8
	gsap.fromTo(el,{
		opacity: 0,
		rotationX: -80,
		y: '100%'
	},{
		scrollTrigger: {
			trigger: el,
		},
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		opacity: 1,
		rotationX: 0,
		y: 0
	})
}
