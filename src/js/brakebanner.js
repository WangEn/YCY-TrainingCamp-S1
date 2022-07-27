class BrakeBanner {
	constructor(selector) {
		this.app = new PIXI.Application({
			width: window.innerWidth,
			height: window.innerHeight,
			// backgroundColor: 0x1d9c9c,
			backgroundColor: 0xffffff,
			antialias: true,
			resolution: 1,
			resizeTo: window
		})

		document.querySelector(selector).appendChild(this.app.view)

		this.stage = this.app.stage

		// this.showText = this.createText('PixiJS and GSAP 入门笔记')
		// this.stage.addChild(this.showText)

		this.loader = new PIXI.Loader();
		this.loader.add('btn.png', './images/btn.png')
		this.loader.add('btn_circle.png', './images/btn_circle.png')
		this.loader.add('brake_bike.png', './images/brake_bike.png')
		this.loader.add('brake_handlerbar.png', './images/brake_handlerbar.png')
		this.loader.add('brake_lever.png', './images/brake_lever.png')
		this.loader.load()
		this.loader.onComplete.add(() => {
			this.show()
		})

	}

	createText (text = '你好~', textStyle = {}, props = {}) {
		const textContainer = new PIXI.Container()
		const finalStyle = {
			width: 80,
			fontSize: 48,
			fontFamily: 'serif',
			fill: 0xffffff,
			x: 200,
			...textStyle
		}
		const finalProps = {
			x: 100,
			y: 200,
			...props
		}
		const showText = new PIXI.Text(text, finalStyle)

		Object.keys(finalProps).map(key => {
			showText[key] = finalProps[key]
		})

		textContainer.addChild(showText)
		return textContainer
	}

	createButton () {
		const actionButton = new PIXI.Container();
		const btnImage = this.resource('btn.png')
		const btnCircleImage = this.resource('btn_circle.png')
		const btnCircleImage2 = this.resource('btn_circle.png')

		btnImage.pivot.x = btnImage.pivot.y = btnImage.width / 2
		btnCircleImage.pivot.x = btnCircleImage.pivot.y = btnCircleImage.width / 2
		btnCircleImage2.pivot.x = btnCircleImage2.pivot.y = btnCircleImage2.width / 2
		btnCircleImage.scale.x = btnCircleImage.scale.y = 0.8
		actionButton.addChild(btnImage)
		actionButton.addChild(btnCircleImage)
		actionButton.addChild(btnCircleImage2)

		gsap.to(btnCircleImage.scale, { duration: 1, x: 1.2, y: 1.2, repeat: -1 })
		gsap.to(btnCircleImage, { duration: 1, alpha: 0, repeat: -1 })
		actionButton.scale.x = actionButton.scale.y = 0.6


		this.stage.addChild(actionButton)
		return actionButton
	}

	resource (name) {
		return new PIXI.Sprite(this.loader.resources[name].texture)
	}

	show () {
		// const demoText = this.createText('loader加载完成', { fontSize: 36 }, { y: 300 })
		// this.stage.addChild(demoText)

		const brakeContainer = new PIXI.Container()
		this.stage.addChild(brakeContainer)

		const brakeBike = this.resource('brake_bike.png')
		brakeContainer.addChild(brakeBike)

		const brakeLever = this.resource('brake_lever.png')
		brakeLever.pivot.x = brakeLever.width
		brakeLever.pivot.y = brakeLever.height
		brakeLever.x = 780
		brakeLever.y = 950
		brakeContainer.addChild(brakeLever)

		const brakeHandlerbar = this.resource('brake_handlerbar.png')
		brakeContainer.addChild(brakeHandlerbar)

		brakeContainer.scale.x = brakeContainer.scale.y = 0.3

		const actionButton = this.createButton()

		function resize () {
			brakeContainer.x = window.innerWidth - brakeContainer.width
			brakeContainer.y = window.innerHeight - brakeContainer.height

			actionButton.x = window.innerWidth - brakeContainer.width + 142
			actionButton.y = window.innerHeight - brakeContainer.height + 220
		}
		window.addEventListener('resize', resize);
		resize()
	}
}