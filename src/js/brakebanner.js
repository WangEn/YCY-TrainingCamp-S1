class BrakeBanner {
	constructor(selector) {
		this.app = new PIXI.Application({
			width: window.innerWidth,
			height: window.innerHeight,
			backgroundColor: 0x1d9c9c,
			antialias: true,
			resolution: 1,
			resizeTo: window
		})

		document.querySelector(selector).appendChild(this.app.view)

		this.stage = this.app.stage

		this.showText = this.createText('PixiJS and GSAP 入门笔记')
		this.stage.addChild(this.showText)

		this.loader = new PIXI.Loader();
		this.loader.add('btn.png', './images/btn.png')
		this.loader.add('btn_circle.png', './images/btn_circle.png')
		this.loader.add('shifter_bike.jpg', './images/shifter_bike.jpg')
		this.loader.add('shifter_spokes.png', './images/shifter_spokes.png')
		this.loader.add('shifter_uncovered.png', './images/shifter_uncovered.png')
		this.loader.add('shifter_covered.png', './images/shifter_covered.png')
		this.loader.add('shifter_clear.png', './images/shifter_clear.png')
		this.loader.add('shifter_bike.png', './images/shifter_bike.png')
		this.loader.add('shifter_wheel.png', './images/shifter_wheel.png')


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

	show () {
		const demoText = this.createText('loader加载完成', { fontSize: 36 }, { y: 300 })
		this.stage.addChild(demoText)
	}
}