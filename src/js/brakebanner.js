class BrakeBanner{
	constructor(selector){
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

	}

	createText(text='你好~') {
		const textContainer = new PIXI.Container()

		const showText = new PIXI.Text(text, {
      width: 80,
      fontSize: 48,
      fontFamily: 'serif',
			fill: 0xffffff
    })

		showText.x = 100
		showText.y = 200

		textContainer.addChild(showText)

		return textContainer
	}
}